import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../constants/Screen";
import { SCREEN_HEIGHT } from "../../constants/Screen";



export const styles = StyleSheet.create({

containerLogin:{
 width: SCREEN_WIDTH,
 //height: SCREEN_HEIGHT,
 backgroundColor: '#7B22D3',

},

subHeader:{
 width: SCREEN_WIDTH,
 height: 300,
 justifyContent: 'flex-end',
 alignItems: 'center',

},
body:{
  width: SCREEN_WIDTH,
  backgroundColor: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20, 
  justifyContent: 'center',
  alignItems: 'center',
  
  
},

pacotesContainer: {
  width: SCREEN_WIDTH,
  justifyContent: 'center',
  marginTop: 60,
},

pacoteDados: {
  fontSize: 12,
  color: '#fff',
},
pacotePreco: {
  fontSize: 16,
  color: '#fff',
},
pacoteValor: {
  fontWeight: '600',
  fontSize: 28,
},
productsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  paddingHorizontal: 10,
  marginTop: 20,
  paddingBottom: 20, 
  flexGrow: 1,
},
productCard: {
  width: '40%',
  height: 250,
  alignItems: 'center',
  marginBottom: 20,
  backgroundColor: '#fff',
  borderRadius: 20,
  elevation: 5,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 1, height: 1 },
},
productImage: {
  width: 164,
  height: 150,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20, 
},
productDetails: {
  width: 164,
  marginTop: 10,
 justifyContent:'flex-start',
 alignItems: 'flex-start',
 left:10


 
},
productName: {
  fontSize: 16,
  fontWeight: 'bold',
},
productQuantity: {
  fontSize: 12,
  color: 'gray',
},
productPrice: {
  fontSize: 14,
  color: '#7B22D3',
  fontWeight:400
},
viewAllContainer: {
  width: SCREEN_WIDTH,
  height:SCREEN_HEIGHT <890 ? 60 :90,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},
viewAllText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 400,
},
})