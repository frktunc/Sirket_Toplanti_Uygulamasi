import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#4b96af'
},
text_container:{
    margin:8,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50,
},
main_textt:{
    fontWeight:'bold',
    fontSize:30,
    textDecorationLine:'underline',
    color:'#720000'
},
main_text:{
fontWeight:'600',
fontSize:19
},
main_text2:{
    fontWeight:'bold',
    fontSize:18,
},
mid_container:{
paddingTop:50,

alignItems:'center'
},
input:{
    borderWidth:1,
    borderRadius:10,
    width:'50%',
    height:'50%',
},
duyuru_text:{
    width:'100%',
    height:'20%',
    borderWidth:1,
    backgroundColor:'#f75959',
    color:'white',
    textAlign:'center',
    fontSize:22,
    marginBottom:20,
   
},
flatlist: {
    backgroundColor:'#04b5c9',
    width: "100%", 
    height:'20%',
    marginTop: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 8,
    borderWidth:3,
    borderColor:'grey'
    
},
maddeContainer: {
    marginBottom: 6,
  },
  voteCountText: {
    fontSize: 16,
    color: '#0a7f19',
  },
  tarihButton: {
    backgroundColor: "#f75959",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  tarihButtonText: {
    color: "#fff",
    fontSize: 16,
  },

}) 
export default styles;