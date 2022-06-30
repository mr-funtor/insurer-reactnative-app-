import { StyleSheet, Text, SafeAreaView, View,Button,FlatList,TouchableHighlight,Image } from 'react-native';
//import { useSelector, useDispatch } from 'react-redux'

const Valuables=({navigation})=>{

    
   return(
    <SafeAreaView >
       <View>
        <Text>Invertory</Text>
        <TouchableHighlight onPress={()=>navigation.navigate('Add to Valuables')}>
            <Text>u</Text>
        </TouchableHighlight>
       </View>
    
    <View style={styles.itemsContainer}>
     <FlatList
        horizontal={false}
       numColumns={2}
       data={value}
       renderItem={renderValue}/>
    </View>
    
    </SafeAreaView>
   ) 
}

export default Valuables;

const styles=StyleSheet.create({
    itemsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        marginTop:20,
    },
    itemCard:{
        backgroundColor:'white',
        minWidth: 170,
        maxWidth: 223,
        height: 234,
        maxHeight:234,
        marginHorizontal:10,
        marginBottom:20
    },
    theImage:{
        resizeMode:'cover',
        height:'100%',
        width: '100%',
    },
    imageContainer:{
        height:160,
        width:'100%'
    }
})