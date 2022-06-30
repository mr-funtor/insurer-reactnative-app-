import { StyleSheet, Text, SafeAreaView, View,Button,FlatList,TouchableHighlight,Image } from 'react-native';
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
        <Text style={{fontSize:20,fontWeight:'bold'}}>Inventory</Text>
        
       </View>
       
       <TouchableHighlight style={styles.addBtn} onPress={()=>navigation.navigate('Add to Valuables')}>
            <Text style={styles.plus}>+</Text>
        </TouchableHighlight>
    
        <View style={styles.itemsContainer}>
         <FlatList
            horizontal={false}
           numColumns={2}
           data={value}
           renderItem={renderValue}/>
        </View>
    
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
    itemsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        marginTop:20,
    },
    addBtn:{
        position:'fixed',
        bottom: 100,
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