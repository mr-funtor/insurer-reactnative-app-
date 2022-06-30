import { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button, Image,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addingValuable } from '../redux/features/dataSlice';

export default function AdditionScreen({navigation}) {
    const [theName, setTheName]=useState('');
    const [theValue, setTheValue]=useState('');
    const [description, setDescription]=useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    
    const dispatch= useDispatch();
    const {value}= useSelector((state) => state.data);
    
    
    //this ensures the user puts a text and not just space
    const containsValidChars=(str)=>{
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~A-Za-z0-9]/;
      return specialChars.test(str);
    }
    
    const validateInputs=()=>{
        if( !containsValidChars(theName) || !containsValidChars(theValue) || !selectedImage)return false;
        return true;
    }
    
    
    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
//        console.log(pickerResult);
        
        if (pickerResult.cancelled === true)return

        setSelectedImage({ localUri: pickerResult.uri });
      }
    
    const openCamera=async()=>{
        const permissionResult=await ImagePicker.requestCameraPermissionsAsync();
        
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
        
       let pickerResult = await ImagePicker.launchCameraAsync();
        console.log(pickerResult);
        
        if (pickerResult.cancelled === true)return

        setSelectedImage({ localUri: pickerResult.uri });
    }
    
    const addItemToState=()=>{
        //checks if the total value is more than 40,000
        const totalValue=value.reduce((acc,item)=>{
            return acc+Number(item.purchasePrice)
        },0)
    
        if(totalValue+Number(theValue) > 40000)return alert("Items total value can't exceed 40,000");
        
        
        const itemToAdd={
            "id": uuidv4(),
	       "name": theName,
            "purchasePrice": Number(theValue),
            "type": "MUSIC_INSTRUMENT",
            "photo": selectedImage.localUri,
      }
        
        dispatch(addingValuable(itemToAdd))//adds the new item to the redux state
        
        navigation.navigate("bottom nav")
        
        //reset the functions state
        setTheName('')
        setTheValue('')
        setDescription('')
        setSelectedImage(null)
    }
    
  return (
    <View style={styles.container}>
      
        <View style={styles.topCasing}>
            <TouchableOpacity ><Text style={styles.cancel} onPress={()=>navigation.goBack()}>Cancel</Text></TouchableOpacity>
            
            <TouchableOpacity  disabled={!validateInputs()} onPress={addItemToState}>
                <Text style={validateInputs()?styles.active : styles.inactive}>Add</Text> 
            </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
            {
            selectedImage && <Image
            style={styles.theImage}
            source={{
              uri: selectedImage.localUri
            }}/>
        }
        </View>

        <View style={styles.actionBox}>
            <Button title="add photo" onPress={openImagePickerAsync}/>
            <Button title="camera" onPress={openCamera}/>
        </View>

      <View>
        <Text>Name</Text>
        <TextInput 
            style={styles.input}
            onChangeText={setTheName}
            value={theName.trim()}
            placeholder="name of valuables"/>
      </View>
      
      <View>
        <Text>Value</Text>
        <TextInput 
            style={styles.input}
            onChangeText={setTheValue}
            value={theValue.trim()}
            placeholder="600"
            keyboardType="numeric"
      />
      </View>
      
      <View>
        <Text>Description</Text>
        <TextInput 
            style={styles.input}
            onChangeText={setDescription}
            value={description.trim()}
            placeholder="Optional"
            multiline
        numberOfLines={4}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      marginTop:80,
      padding:20,
  },
    topCasing:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:40,
    },
    cancel:{
        color:'red'
    },
    active:{
        color:'blue',
    },
    inactive:{
        color:'grey',
    },
    input:{
        backgroundColor:'#fff',
        paddingHorizontal:10,
        marginBottom:10,
        marginTop:5,
    },
    imageContainer:{
        height:150,
        width:150,
        alignSelf:'center',
        borderRadius:150,
        borderWidth:1,
        borderColor: 'gray',
        overflow:'hidden'
    },
    theImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    },
    actionBox:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:40,
    }
});

//change add photo to 'change photo'
//select options
//icons
