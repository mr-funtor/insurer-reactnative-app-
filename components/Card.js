import { StyleSheet, Text, View,Image } from 'react-native';

const Card=({item})=>{
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

export default Card;

const styles = StyleSheet.create({
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
})