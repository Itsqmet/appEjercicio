import { StatusBar } from 'expo-status-bar';
import {Button ,Alert, Image,StyleSheet, Text, TextInput, TextInputBase, TouchableOpacity, View } from 'react-native';

export default function App() {
  function mensaje(){
    Alert.alert("Enviado", "Ingresado correctamente")
  }
  return (
    <View style={styles.container}>

    <Image
      style={styles.img2}
      source={require('./assets/Imagen.jpeg')}
      />

      
      <Text style={styles.txt1}>Bienvenido</Text>
      <Text></Text>
      <Text style={styles.text2}>Ingrese sus Datos</Text>
      <Text></Text>
      
      <TextInput style={styles.Input}
      placeholder='Ingresar nombre'/>
      <TextInput style={styles.Input2}/>
     
      <Image
      style={styles.img1}
      source={require('./assets/usuario.jpg')}
      />
      
      <TextInput style={styles.Input}
      placeholder='Ingresar teléfono'
      keyboardType='numeric'/>
      <TextInput style={styles.Input2}/>
     
      <Image
      style={styles.img1}
      source={require('./assets/telefono.jpg')}
      />

     <TextInput style={styles.Input}
      placeholder='Ingresar dirección'/>
      <TextInput style={styles.Input2}/>
     
      <Image
      style={styles.img1}
      source={require('./assets/dirección.jpg')}
      />

     <TextInput style={styles.Input}
      placeholder='Correo electrónico'/>
      <TextInput style={styles.Input2}/>
     
      <Image
      style={styles.img1}
      source={require('./assets/correo.jpg')}
      />
      
      <TouchableOpacity style={styles.btn1} onPress={mensaje}> 
      <Text style={{fontSize:20, color:'white'}}>Enviar</Text>
      </TouchableOpacity>
       

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80ff80",
    alignItems: 'center',
    justifyContent: 'center',

  },
  txt1:{
    color:'blue',
    fontSize:30,
    
  },
  text2:{
    backgroundColor:'yellow',
    color:'black',
    fontSize:20,
    height:-30,
    right: '20%',
    borderRadius: 10,
    top:2

  },
  Input:{
    backgroundColor:'grey',
    color:'black',
    fontSize:15,
    height:'5%',
    right: '1%',
    paddingHorizontal:35,
    borderRadius: 20,
    
  },
  Input2:{
    backgroundColor:'grey',
    color:'black',
    height:'1%',
    right: '60%',
    
  },
  img1:{
    width:"12%",
    height: "3%",
    padding: '5%',
    top:-55,
    right:140
  },

  img2:{
    width:"26%",
    height: "13%",
    alignItems: 'center',
    padding: '5%',
    right:10
  },

  btn1:{
    backgroundColor:'#0000ff',
    width: '30%',
    height: "4%",
    alignItems: 'center',
    borderRadius: 10,
    top:5,
  },
  
})
