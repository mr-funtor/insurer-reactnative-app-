import { StyleSheet, Text, SafeAreaView, View,Button,FlatList,TouchableHighlight,Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

const Valuables=({navigation})=>{
    const {value}= useSelector((state) => state.data)
    console.log(value)
    
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