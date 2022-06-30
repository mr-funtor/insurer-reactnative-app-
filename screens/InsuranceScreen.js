import { StyleSheet, Text, SafeAreaView } from 'react-native';

const Insurance=()=>{
   return(
    <SafeAreaView style={styles.container}>
     <Text>Insurance</Text>  
    </SafeAreaView>
   ) 
}

export default Insurance;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})