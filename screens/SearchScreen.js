import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

const Search=({navigation})=>{
   return(
    <SafeAreaView style={styles.container}>
     <Text>Search</Text>
    </SafeAreaView>
   ) 
}

export default Search;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})