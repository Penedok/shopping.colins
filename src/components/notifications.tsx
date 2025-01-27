import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Alert } from 'react-native';

export async function registerForPushNotificationsAsync() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      Alert.alert('Permissão necessária', 'Você precisa permitir notificações para receber avisos importantes.');
      return null;
    }

    // Obtém o token do dispositivo
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Token de Notificação:', token);
    return token;
  } else {
    Alert.alert('Não suportado', 'As notificações só funcionam em dispositivos físicos.');
    return null;
  }
}

export function setupNotificationHandlers() {
  // Manipula a chegada de notificações
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}
