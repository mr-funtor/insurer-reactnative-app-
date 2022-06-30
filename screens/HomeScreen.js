import { StyleSheet, Text, Button,SafeAreaView } from 'react-native';


const Home=({navigation})=>{
    
   
    
   return(
    <SafeAreaView style={styles.container}>
     <Text>Home</Text>
    </SafeAreaView>
   ) 
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})