import { SCREEN_WIDTH } from "@/src/constants/Screen";
import { StyleSheet } from "react-native";

 export  const  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f1f1f1",
    },
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    screenText: {
      fontSize: 24,
      fontWeight: "bold",
    },
    navBar: {
      width: SCREEN_WIDTH,
      height: 70,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#f1f1f1",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderTopWidth: 0.5,
      borderTopColor: "#ddd",
    },
    icon: {
      width: 24,
      height: 24,
      tintColor: "#828282",
    },
    
  });