import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../constants/Screen";
import { SCREEN_HEIGHT } from "../constants/Screen";



export const styles = StyleSheet.create({

containerLogin:{
 width: SCREEN_WIDTH,
 height: SCREEN_HEIGHT,
 backgroundColor: '#7B22D3'
},

subHeader:{
 width: SCREEN_WIDTH,
 height: 330,
 justifyContent: 'center',
 alignItems: 'center'
},
bodyLogin:{
  flex: 1,
  width: 
  SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  backgroundColor: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20 
},
viewTextLogin:{
 width: SCREEN_WIDTH,
 height: 70,
 justifyContent:'center',
 alignItems: 'center',
},

loginText:{
 fontSize: 24,
 fontWeight: 600
},
viewInputsLogin:{
  width: SCREEN_WIDTH,
  height: 200,
  alignItems:'center',
  justifyContent: 'space-between'     
},

viewInput:{
 width: 380,
 height: 80,
 backgroundColor: '#fff',
 shadowColor: "#000",
 shadowOpacity: 0.8,
 shadowOffset: { width: 1, height: 1 },
 elevation: 5,
 borderRadius: 24,
 flexDirection: 'row',
 alignItems: 'center'  
},
campoInput:{
 width: 380,
 height: 50,
 backgroundColor: "#FFF",
 padding: 5,
 paddingLeft: 20,
 borderRadius: 25,
 borderColor: "#C1C1C1",
 borderStyle: "solid",
 marginTop: 5,
 paddingHorizontal: 5,
 color: "#000",
 alignItems: 'center'   
},
openInput:{
 width: 380,
 height: 80,
 backgroundColor: '#fff',
 shadowColor: "#000",
 shadowOpacity: 0.8,
 shadowOffset: { width: 1, height: 1 },
 elevation: 5,
 borderRadius: 24,
 flexDirection: 'row',
 paddingHorizontal: 15,
  alignItems: 'center'  
},
textOpenInput:{
 fontSize: 18,
 fontWeight: 600,
 left: 20,
 top: 3   
}
,
viewBoxButton:{
 width: SCREEN_WIDTH,
 justifyContent: 'space-around',
 alignItems: 'center',
 marginTop: 20,
 height: SCREEN_HEIGHT >= 800 ? 260 : 40
},

enterButton:{
 backgroundColor:"#7B22D3",
 borderRadius: 20,
 paddingHorizontal: 30,
 paddingVertical: 10,
 marginBottom: 20,
}
,
enterText:{
 color: '#FFFFFF',
 fontSize: 16,
fontWeight: 'bold',   
}
,
linksNavegacao:{
 flexDirection: 'row',
 alignItems: 'center',
 marginBottom: 20,  
},

links:{
 color: '#9B9B9B',
 fontSize: 14,
 textDecorationLine: 'underline',
},
indicadorImage:{
 height: 5,
 borderRadius: 2.5,
}

})