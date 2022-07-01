import { StyleSheet, Text, SafeAreaView, View,Button,FlatList,TouchableHighlight,Image,TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

//components
import Card from '../components/Card'

const Valuables=({navigation})=>{
    const {value}= useSelector((state) => state.data)
//    console.log(value)
    
    const renderValue=({item})=>{
        return(
            < Card item={item}/>     
        ) 
    }
    
   return(
    <View style={styles.mainContainer}>
       <View>
        <Text style={styles.inventory}>Inventory</Text>
        
       </View>
       
       
        <TouchableWithoutFeedback style={styles.itemsContainer}>
         <FlatList
            horizontal={false}
           numColumns={2}
           data={value}
           renderItem={renderValue}/>
        </TouchableWithoutFeedback>
       
       <TouchableHighlight style={styles.addBtn} onPress={()=>navigation.navigate('Add to Valuables')}>
            <Text style={styles.plus}>+</Text>
        </TouchableHighlight>
    
    </View>
   ) 
}

export default Valuables;

const styles=StyleSheet.create({
    mainContainer:{
        marginTop:50,
        paddingHorizontal:20,
        flex:1
    },
    inventory:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    },
    addBtn:{
        position:'absolute',
        bottom: 40,
        right:30,
        backgroundColor:'blue',
        borderRadius:190,
        height:50,
        width:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    plus:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
})