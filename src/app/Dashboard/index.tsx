

import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"
import { router } from "expo-router";
import { SCREEN_WIDTH } from "../../constants/Screen";
import { SCREEN_HEIGHT } from "../../constants/Screen";
import { Feather, Ionicons, AntDesign, } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";
import loginUser from "../service/login.service";
import { styles } from "./style";
import productsGet from "../service/getProdutos.service";
import { iProducts } from "@/src/@types/products"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Navbar from "@/src/components/Navbar";
import { Tabs } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { iUser } from "@/src/@types/products";





export default function Login() {
    const [openInputPassword, setOpenInputPassword] = useState(false)
    const [password, setPassword] = useState("");
    const [openInputEmail, setOpenInputEmail] = useState(false)
    const [email, setEmail] = useState("")
    const inputRef = useRef(null);
    const pacotes = [{
        nome: "Acapulco",
        valor_atual: "50.00",
        dados: "Guerreiro México"

    },
    {
        nome: "Disney",
        valor_atual: "50.00",
        dados: "Orlando Florida"
    },
    {
        nome: "Maldivas",
        valor_atual: "50.00",
        dados: "Male  Índia"
    },
    ]
    const [itensProducts, setItensProducts] = useState<iProducts[]>([]);
    const [viewShoop, setviewShoop] = useState(false)
    const [userDados, setUserDados] = useState<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        saldo: string;
        dataCadastro: string;
      } | null>(null); 


    useEffect(()=>{
        fetchStoredUser()
    },[])


    useEffect(() => {
        password?.length > 0 ? setOpenInputPassword(true) : setOpenInputPassword(false)
        email?.length > 0 ? setOpenInputEmail(true) : setOpenInputEmail(false)
    }, [password, email])

    useEffect(() => {
        console.log('entrou')
        handleProductsGet()
    }, [])

    const handleOpenPassword = () => {
        setOpenInputPassword(true);
        setTimeout(() => {
            /* @ts-ignore */
            inputRef.current?.focus();
        }, 100);
    };

    const handleOpenEmail = () => {
        setOpenInputEmail(true);
        setTimeout(() => {
            /* @ts-ignore */
            inputRef.current?.focus();
        }, 100);
    };


    const handleProductsGet = async () => {

        const response = await productsGet()

        if (response) {
            setItensProducts(response.data);
        } else {
            console.log("erro login")
        }
    }

    const fetchStoredUser = async () => {
        try {
          const storedUser = await SecureStore.getItemAsync("user");
          if (storedUser) {
            const user = JSON.parse(storedUser); 
            setUserDados(user);
          } else {
            console.log("Nenhum usuário encontrado.");
            setUserDados(null); 
          }
        } catch (error) {
          console.error("Erro ao acessar o SecureStore:", error);
          setUserDados(null); 
        }
      };

      console.log(userDados?.nome)

    return (
        <View style={styles.containerLogin}>
            <StatusBar
                animated={true}
                barStyle={"light-content"}
                backgroundColor="#7B22D3"
            />

            <View style={{
                width: SCREEN_WIDTH,


            }}>
                <View style={styles.subHeader} >
                    <View style={{ width: SCREEN_WIDTH, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <Image source={require("../assets/images/icon_perfil.png")} />
                        <Image source={require("../assets/images/name_icon.png")} />
                    </View>
                    <View style={{ width: SCREEN_WIDTH, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 40 }}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>
                            Olá, <Text style={{ fontWeight: '600', color: '#fff' }}>{userDados?.nome}</Text>
                        </Text>
                        <Image source={require("../assets/images/notification.png")} />
                    </View>
                    {/* balao saldo */}
                    <View style={{
                        position: "absolute",
                        top: 150,
                        flex: 1,
                        zIndex: 500,
                        width: 380,
                        height: 80,
                        backgroundColor: '#fff',
                        shadowColor: "#000",
                        shadowOpacity: 0.8,
                        shadowOffset: { width: 1, height: 1 },
                        elevation: 5,
                        borderRadius: 24,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                            <Image source={require("../assets/images/wallet.png")} style={{ top: 1 }} />
                            <Text style={{ fontSize: 16, color: '#000', textAlign: 'center', left: 7 }}>
                                Lc <Text style={{ fontWeight: '600', color: '#000', fontSize: 18, }}>{userDados?.saldo}</Text>
                            </Text>
                        </View>
                        <Image source={require("../assets/images/line.png")} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                            <Image source={require("../assets/images/shopping-bag.png")} />
                            <Text style={{ fontSize: 18, color: '#000', fontWeight: '600', textAlign: 'center', left: 7 }}>
                                Shopp
                            </Text>
                        </View>

                    </View>
                </View>

                <View style={styles.body}>
                    {/* Pacotes Scroll Section */}
                    <View style={styles.pacotesContainer}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.scrollContent}
                        >
                            {pacotes?.map((e, index) => (
                                <View key={index} style={styles.pacoteCard}>
                                    <View style={styles.pacoteImageContainer}>
                                        <Image
                                            source={require('../assets/images/img_ferias.png')}
                                            style={styles.pacoteImage}
                                        />
                                    </View>
                                    <View style={styles.pacoteDetails}>
                                        <Text style={styles.pacoteTitle}>
                                            Pacote <Text style={styles.pacoteHighlight}>{e.nome}</Text>
                                        </Text>
                                        <Text style={styles.pacoteDados}>{e.dados}</Text>
                                        <Text style={styles.pacotePreco}>
                                            Lc
                                            <Text style={styles.pacoteValor}>{e.valor_atual}</Text>
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Products Section */}
                    <View style={styles.productsContainer}>
                        {itensProducts.slice(0, 2).map((item, index) => (
                            <View key={index} style={styles.productCard}>
                                <Image source={{ uri: item.imagem }} style={styles.productImage} />
                                <View style={styles.productDetails}>
                                    <Text style={styles.productName}>{item.nome}</Text>
                                    <Text style={styles.productQuantity}>{item.quantidade} unidades</Text>
                                    <Text style={styles.productPrice}>Lc</Text>
                                    <Text style={{ ...styles.productPrice, fontWeight: 800, fontSize: 18 }}>{item.preco}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    {/* View All Products Button */}
                    <View style={styles.viewAllContainer}>
                        <TouchableOpacity
                            onPress={() => router.replace("/Shopping")}
                            style={{ width: '60%', backgroundColor: '#7B22D3', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={styles.viewAllText}>Ver todos os produtos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    position: 'absolute', bottom: 95, width: SCREEN_WIDTH, 
                    height: 50, alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20,
                }}>
                   <Navbar
                   />
                </View>
            </View>

        </View>
    )
}