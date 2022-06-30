import { StyleSheet, Text, SafeAreaView, View,Button,FlatList,TouchableHighlight,Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

const Valuables=({navigation})=>{
    const {value}= useSelector((state) => state.data)
//    console.log(value)
    
    const renderValue=({item})=>{
        const {name, purchasePrice,photo}=item;
        return(
            <View style={styles.itemCard}>
                <View style={styles.imageContainer}>
                    <Image style={styles.theImage} source={{uri:photo}} />
                </View>
                <Text> {name}</Text>
                <Text> {purchasePrice}</Text>
            </View>
            
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