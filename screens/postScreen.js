import React,{Component} from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class PostScreen extends Component{
  render(){
    return(
<View  style={{ backgroundColor: 'black', flex: 1 }}>
 <View style={{ flexDirection: 'row', flex: 0.15,marginLeft:20,marginTop:10}}>
          <View>
            <Image source={require('../assets/logo.png')} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text}>Spectagram</Text>
          </View>
           </View>


          <View style={{
          backgroundColor: 'gray',
          flex: 1,
          borderRadius: 20,
          margin: 20}}>
           <View style={{ flexDirection: 'row',flex:0.1}}>
          <View
            style={{
              width: 50,
            
              heigth: 60,
              borderRadius: 10,
              margin:20,
             
            }}>
            <Image
              source={require('../assets/profile_img.png')}
              style={styles.profile}
            />
          </View >
          <View style={{marginTop:15,marginLeft:-15 }}>
            <Text style={{marginTop:10,color:'white',fontSize:20 }}>
              {this.props.route.params.post.Name}
             
            </Text>
          </View>
        </View>
         
         <Image source={require('../assets/image_1.jpg')} style={styles.img3}/>
        
 <Text style={{ marginLeft: 20, marginTop: 30, color: 'white' }}>
            {' '}
            {this.props.route.params.post.Caption}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: 100,
              height: 30,
              backgroundColor: '#eb3636',
              justifyContent: 'center',
              borderRadius: 15,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 10,
            }}>
            <View>
              <Ionicons name={'heart'} size={28} color={'white'} />
            </View>
            <View>
              <Text style={{ color: 'white', fontSize: 20 }}> 12K </Text>
            </View>
          </View>
          </View>
</View>
    )
  }
} 

const styles = StyleSheet.create({
   img: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    borderRadius:20,
  },
  profile:{
 width: 40,
    height: 40,
    borderRadius:20,
    backgroundColor:'white'
  },
  text: {
    color: 'white',
    fontSize: 30,
    padding: 5,
    marginTop: 6,
    marginLeft: 15,
    
  },
  img3:{
  width: '100%',
  heigth: 60,
  resizeMode: 'contain',
  flex:0.9,
  marginTop:40,
  borderTopLeftRadius:20,
  borderTopRightRadius:20
  }
})