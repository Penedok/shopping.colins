

import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from "react-native"
import { router } from "expo-router";
import { SCREEN_WIDTH } from "../constants/Screen";
import { SCREEN_HEIGHT } from "../constants/Screen";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";
import { styles } from "./style";
import loginUser from "./service/login.service";
import { registerForPushNotificationsAsync, setupNotificationHandlers } from '../components/notifications';




export default function Login() {
    const [openInputPassword, setOpenInputPassword] = useState(false)
    const [password, setPassword] = useState("");
    const [openInputEmail, setOpenInputEmail] = useState(false)
    const [email, setEmail] = useState("")
    const inputRef = useRef(null);


    useEffect(() => {
        password?.length > 0 ? setOpenInputPassword(true) : setOpenInputPassword(false)
        email?.length > 0 ? setOpenInputEmail(true) : setOpenInputEmail(false)
    }, [password, email])

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



    const handleLogin = async () => {
        const result = await loginUser(email, password);

        if (result.success) {
            Alert.alert("Login bem-sucedido!", `Bem-vindo, ${result.user.nome}`);
            router.replace("/Dashboard");
        } else {
            Alert.alert("Erro", result.message);
        }
    };


    useEffect(() => {
        setupNotificationHandlers();


        const requestPermission = async () => {
            const token = await registerForPushNotificationsAsync();
            if (token) {
                console.log('Token recebido:', token);
            } else {
                Alert.alert('Atenção', 'Permissões de notificação não concedidas.');
            }
        };

        requestPermission();
    }, []);
    return (
        <View style={styles.containerLogin}>
            <StatusBar
                animated={true}
                barStyle={"light-content"}
                backgroundColor="#7B22D3"
            />
            <View style={styles.subHeader} >
                <Image source={require("../../src/app/assets/images/icon_carteira.png")} />
            </View>

            <View style={styles.bodyLogin} >
                <KeyboardAvoidingView
                    keyboardVerticalOffset={SCREEN_HEIGHT >= 800 ? 370 : 40}
                    behavior="padding"
                    style={{ width: "90%" }}>
                    <View style={styles.viewTextLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                    <View style={styles.viewInputsLogin}>
                        {/* User Email */}
                        {openInputEmail ? (
                            <View style={styles.viewInput}>
                                <TextInput
                                    ref={inputRef}
                                    value={email}
                                    onChangeText={(e) => setEmail(e)}
                                    allowFontScaling={false}
                                    autoCapitalize="none"
                                    style={styles.campoInput}
                                />
                            </View>
                        ) : (
                            <TouchableOpacity
                                onPress={handleOpenEmail}
                                style={styles.openInput}>
                                <Feather name={"user"} size={30} color={"#7B22D3"} />
                                <Text style={styles.textOpenInput}>E-mail</Text>
                            </TouchableOpacity>
                        )}
                        {/* User Password */}
                        {openInputPassword ? (
                            <View style={styles.viewInput}>
                                <TextInput
                                    ref={inputRef}
                                    value={password}
                                    onChangeText={(e) => setPassword(e)}
                                    allowFontScaling={false}
                                    autoCapitalize="none"
                                    style={styles.campoInput}
                                />
                            </View>
                        ) : (
                            <TouchableOpacity
                                onPress={handleOpenPassword}
                                style={styles.openInput}>
                                <Feather name={"lock"} size={30} color={"#7B22D3"} />
                                <Text style={styles.textOpenInput}>Senha</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.viewBoxButton}>
                    {/* Botão "Entrar" */}
                    <TouchableOpacity
                        disabled={!password && !email}
                        onPress={handleLogin}
                        style={styles.enterButton}>
                        <Text style={styles.enterText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    {/* Links de navegação */}
                    <View style={styles.linksNavegacao}>
                        <TouchableOpacity>
                            <Text style={styles.links}>Registrar-se</Text>
                        </TouchableOpacity>

                        <Text style={{
                            marginHorizontal: 10,
                        }}> | </Text>

                        <TouchableOpacity>
                            <Text style={styles.links}>Resetar senha</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Indicador */}
                    <Image
                        source={require("../app/assets/images/indicator.png")}
                        style={styles.indicadorImage}
                        resizeMode="contain"
                    />
                </View>

            </View>
        </View>
    )
}