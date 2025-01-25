

import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Alert } from "react-native"
import { router } from "expo-router";
import { SCREEN_WIDTH } from "../../constants/Screen";
import { SCREEN_HEIGHT } from "../../constants/Screen";
import { Feather, Ionicons, AntDesign, } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";
import loginUser from "../service/login.service";
import productsGet from "../service/getProdutos.service";
import { iProducts } from "@/src/@types/products"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Navbar from "@/src/components/Navbar";
import { Tabs } from "expo-router";
import { styles } from "./style";
import { registerForPushNotificationsAsync, setupNotificationHandlers } from '../../components/notifications';
import * as Notifications from 'expo-notifications';





export default function Shopping() {
    const [itensProducts, setItensProducts] = useState<iProducts[]>([]);
    const [select, setSelect] = useState<iProducts>()
    useEffect(() => {
        handleProductsGet()
    }, [])
    const handleProductsGet = async () => {
        const response = await productsGet()
        if (response) {
            setItensProducts(response.data);
        } else {
            console.log("erro login")
        }
    }

    const handleShoop = async (item: iProducts) => {
        setSelect(item)
        if (item) {
            setupNotificationHandlers();

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: `O ${item.nome} está à caminho!🥳`,
                    body: '🎁 Parabéns, sua compra foi confirmada!',
                },
                trigger: null,
            });
        }
    };

    return (
        <View style={styles.containerLogin}>
            <StatusBar animated={true} barStyle="light-content" backgroundColor="#7B22D3" />
            <View
                style={{
                    width: SCREEN_WIDTH,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View style={styles.subHeader}>
                    <TouchableOpacity
                      onPress={()=>router.replace("/Dashboard")}
                        style={{
                            width: SCREEN_WIDTH,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            paddingHorizontal: 20,
                            height: 130,
                        }}
                    >
                        <Image
                            source={require('../assets/images/arrow.png')}
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        />
                        <Text style={{ fontWeight: '600', color: '#fff', textAlign: 'center', bottom: 3, right: 10 }}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <View
                        style={{
                            width: 380,
                            height: 60,
                            borderRadius: 24,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <View style={{ flexDirection: 'row', left: 10 }}>
                            <Text style={{ fontSize: 24, color: '#000', fontWeight: '600' }}>Shop</Text>
                        </View>
                    </View>

                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        contentContainerStyle={[styles.productsContainer, { paddingBottom: 300 }]}
                    >
                        {itensProducts.map((item, index) => (
                            <View key={index} style={styles.productCard}>
                                <Image source={{ uri: item.imagem }} style={styles.productImage} />
                                <View style={styles.productDetails}>
                                    <Text style={styles.productName}>{item.nome}</Text>
                                    <Text style={styles.productQuantity}>{item.quantidade} unidades</Text>
                                    <Text style={styles.productPrice}>Lc</Text>
                                    <Text style={{ ...styles.productPrice, fontWeight: '800', fontSize: 18 }}>{item.preco}</Text>
                                    {select?.id === item?.id ? (
                                        <TouchableOpacity
                                            onPress={() => handleShoop(item)}
                                            style={{
                                                width: 35, height: 35, borderRadius: 10,
                                                justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 20, top: 45, backgroundColor: "#7B22D3"
                                            }}>


                                            <Image source={require("../assets/images/check-circle.png")} style={{}}>

                                            </Image>

                                        </TouchableOpacity>

                                    ) : (
                                        <TouchableOpacity
                                            onPress={() => handleShoop(item)}
                                            style={{
                                                width: 35, height: 35, borderRadius: 10,
                                                justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 20, top: 45, backgroundColor: "#7B22D3"
                                            }}>


                                            <Image source={require("../assets/images/shopping-cart.png")} style={{}}>

                                            </Image>

                                        </TouchableOpacity>
                                    )}

                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View
                    style={{
                        position: 'absolute',
                        bottom: 90,
                        width: SCREEN_WIDTH,
                        backgroundColor: 'red',
                        height: 120,
                        alignItems: 'center',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}
                >
                    <Navbar />
                </View>
            </View>
        </View>
    )
}