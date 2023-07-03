import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defImage: 'image1',
    };
  }
  render() {
    let pre_img = {
      image1: require('../assets/image_1.jpg'),
      image2: require('../assets/image_2.jpg'),
      image3: require('../assets/image_3.jpg'),
      image4: require('../assets/image_4.jpg'),
      image5: require('../assets/image_5.jpg'),
      image6: require('../assets/image_6.jpg'),
      image7: require('../assets/image_7.jpg'),
    };
    return (
      <View style={{backgroundColor:'black',flex:1,padding:5}}>
      <View style={{ flexDirection: 'row', flex: 0.15 }}>
          <View>
            <Image source={require('../assets/logo.png')} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text}>Spectagram</Text>
          </View>
        </View>
        <View style={{marginTop:10}}>
        <Image source={pre_img[this.state.defImage]} style={styles.preview} />

        <DropDownPicker
          items={[
            { label: 'image_1', value: 'image1' },
            { label: 'image_2', value: 'image2' },
            { label: 'image_3', value: 'image3' },
            { label: 'image_4', value: 'image4' },
            { label: 'image_5', value: 'image5' },
            { label: 'image_6', value: 'image6' },
            { label: 'image_7', value: 'image7' },
          ]}
           defaultValue={this.state.defImage}
          open={this.state.dropdownHeight === 170 ? true : false}
          onOpen={()=>{this.setState({ dropdownHeight: 170 })}}
          onClose={()=>{this.setState({ dropdownHeight: 40 })}}
           style={{
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: 'white',
                }}
            textStyle={{
                  color: this.state.dropdownHeight == 170 ? 'gray' : 'white',
                }}
               
               
          onSelectItem={(item)=>{this.setState({defImage:item.value})}}
        />

        <TextInput 
        placeholder={'Caption'} 
        placeholderTextColor={'white'}
        onChangeText={(caption)=>{this.setState({caption})}}
        style={styles.textinput}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    width: '90%',
    height: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius:10,
    marginBottom:10
  },
  img: {
    width: 45,
    height: 45,
    marginTop: 10,
    marginLeft: 10,
  
  },
  text: {
    color: 'white',
    fontSize: 30,
    padding: 5,
    marginTop: 6,
    marginLeft: 15,
  },
  textinput:{
    
    backgroundColor: 'transparent',
    borderRadius: 10,
    color: 'white',
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    borderColor: 'white',
    marginTop: 10,
  }
});
