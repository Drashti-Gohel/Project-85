import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('PostScreen', {
            post: this.props.post,
          });
        }}>
        <View
          style={{
            backgroundColor: 'gray',
            flex: 1,
            borderRadius: 20,
            margin: 20,
          }}>
          <View style={{ flexDirection: 'row', flex: 0.1 }}>
            <View
              style={{
                width: 50,

                heigth: 60,
                borderRadius: 10,
                margin: 20,
              }}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.img}
              />
            </View>
            <View>
              <Text style={{ marginLeft: 20, marginTop: 30, color: 'white' }}>
                {' '}
                {this.props.post.Name}
              </Text>
            </View>
          </View>
          <View sytle={{ backgroundColor: 'white' }}>
            <Image
              source={require('../assets/image_1.jpg')}
              style={styles.img2}
            />
          </View>
          <Text style={{ marginLeft: 20, marginTop: 30, color: 'white' }}>
            {' '}
            {this.props.post.Caption}
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
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    heigth: 50,
    resizeMode: 'contain',
  },
  img2: {
    width: '90%',
    heigth: 50,
    resizeMode: 'contain',
    margin: 20,
  },
});
