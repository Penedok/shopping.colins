import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { Tabs } from "expo-router";
import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"
import { SCREEN_WIDTH } from '@/src/constants/Screen';
import { styles } from "./style"
import Dashboard from "../../app/Dashboard"
import Shopping from "../../app/Shopping"
import Profile from "../../app/Profile"
import * as SecureStore from "expo-secure-store";
import { iUser } from "@/src/@types/products";




export default function Navbar() {
    const [activeScreen, setActiveScreen] = useState("dashboard");



    const handleNavigation = (screen: string, route: any, ) => {
        setActiveScreen(screen);
        router.replace(route);
    };

    return (
        <View style={styles.container}>

            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => handleNavigation("dashboard", "/Dashboard" )}>
                    <Image
                        source={require("../../app/assets/images/Home.png")}
                        style={{
                            tintColor: activeScreen === "dashboard" ? "#7B22D3" : "#828282",
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation("shopping", "/Shopping")}>
                    <Image
                        source={require("../../app/assets/images/Bag.png")}
                        style={{
                            tintColor: activeScreen === "shopping" ? "#7B22D3" : "#828282",
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation("profile", "/Profile" )}>
                    <Image
                        source={require("../../app/assets/images/minha_conta.png")}
                        style={{
                            tintColor: activeScreen === "profile" ? "#7B22D3" : "#828282",
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )

}