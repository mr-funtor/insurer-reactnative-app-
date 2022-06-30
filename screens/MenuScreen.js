import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

const Menu=({navigation})=>{
   return(
    <SafeAreaView style={styles.container}>
     <Text>Menu</Text>
    </SafeAreaView>
   ) 
}

export default Menu;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})