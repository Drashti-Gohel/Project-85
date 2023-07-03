import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
let posts = require('./temp_posts.json');
import PostCard from './PostCard';
export default class Feed extends Component {
  keyExtractor = (item, index) => {
    index.toString();
  };
  renderItem = ({item: post}) => {
    return <PostCard post={post} navigation={this.props.navigation}/>;
  };
  render() {
    return (
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <View style={{ flexDirection: 'row', flex: 0.15 }}>
          <View>
            <Image source={require('../assets/logo.png')} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text}>Spectagram</Text>
          </View>
        </View>
        <View style={{flex:0.75}}>
          <FlatList
            data={posts}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
