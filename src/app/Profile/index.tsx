import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Alert } from "react-native"
import { router } from "expo-router";
import { SCREEN_WIDTH } from "../../constants/Screen";
import { SCREEN_HEIGHT } from "../../constants/Screen";
import { Feather, Ionicons, AntDesign, } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/src/components/Navbar";
import * as ImagePicker from 'expo-image-picker';
import { styles } from './style';
import { iUser } from "@/src/@types/products";
import * as SecureStore from "expo-secure-store";








export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userDados, setUserDados] = useState<{
    id: string;
    nome: string;
    email: string;
    senha: string;
    saldo: string;
    dataCadastro: string;
  } | null>(null);

  useEffect(() => {
    fetchStoredUser()
  }, [])

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

  const logout = async () => {
    try {
      if(userDados){
        await SecureStore.deleteItemAsync("user");
        console.log("Dados apagados com sucesso!");
        router.replace("/")
        setUserDados(null);

      }
    } catch (error) {
      console.error("Erro ao tentar apagar os dados:", error);
    }
  };

  // Função para selecionar imagem
  /* const pickImage = async () => { 
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    const pickImage = async () => { 
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (status !== 'granted') {
        alert('Permissão para acessar a galeria é necessária!');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Quadrado
        quality: 1,
      });
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    }; 

  } */

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
        {/* Cabeçalho do perfil */}
        <View style={styles.subHeader}>
          <TouchableOpacity
            style={{
              width: SCREEN_WIDTH,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
              height: 250,
              backgroundColor: '#7B22D3', // Cor do cabeçalho
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <Image source={require("../assets/images/perfil.png")} style={{ width: 100, height: 100, borderRadius: 50 }} />
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600', marginTop: 10 }}>{userDados?.nome}</Text>
            <TouchableOpacity
              style={{
                width: 132,
                height: 40,
                backgroundColor: "#313131",
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15
              }}
            >
              <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>Editar Perfil</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>


        <View style={styles.body}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f4f4f4', // Fundo claro para a seção de detalhes
              borderRadius: 24,
              marginTop: 20,
              padding: 20,
              alignItems: 'center',
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowOffset: { width: 1, height: 1 },
              height: 90,
              width: 390,
              flexDirection: 'row',
              justifyContent: 'space-between'

            }}
          >
            <Image source={require('../assets/images/Vector.png')} />
            <Text style={{ fontSize: 24, color: '#333', fontWeight: '600', right: 40 }}>Detalhes do Perfil</Text>
            <Image source={require('../assets/images/arrowLef.png')} />

          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#f4f4f4', // Fundo claro para a seção de detalhes
              borderRadius: 24,
              marginTop: 20,
              padding: 20,
              height: 90,
              width: 390,
              alignItems: 'center',
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowOffset: { width: 1, height: 1 },
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Image source={require('../assets/images/banco.png')} />
            <Text style={{ fontSize: 24, color: '#333', fontWeight: '600', right: 40 }}>Detalhes da Conta</Text>
            <Image source={require('../assets/images/arrowLef.png')} />

          </TouchableOpacity>


          <TouchableOpacity
            style={{
              backgroundColor: '#f4f4f4',
              borderRadius: 24,
              marginTop: 20,
              padding: 20,
              height: 90,
              width: 390,
              alignItems: 'center',
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowOffset: { width: 1, height: 1 },
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Image source={require('../assets/images/anota.png')} />
            <Text style={{ fontSize: 24, color: '#333', fontWeight: '600', right: 95 }}>Histórico</Text>
            <Image source={require('../assets/images/arrowLef.png')} />

          </TouchableOpacity>

          <View style={{
            height: 190,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity 
            onPress={()=>logout()}
            style={{
              backgroundColor: '#6A0DAD',
              borderRadius: 25,
              paddingHorizontal: 40,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
            }}>
              <Text style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 'bold',
              }}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View
        style={{
          position: 'absolute',
          bottom: -85,
          width: SCREEN_WIDTH,
          backgroundColor: 'red',
          height: 100,
          alignItems: 'center',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Navbar />
      </View>


    </View>





  );
};