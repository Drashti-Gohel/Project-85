import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      repassword: '',
    };
  }

  registeruser = () => {
    if (password === repassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert('User registered');
          console.log(userCredential.user.uid);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert('Password not matched');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={'First Name'}
          placeholderTextColor={'white'}
          onChangeText={(text) => {
            this.setState({ fname: text });
          }}
        />
        <TextInput
          style={styles.input}
          placeholder={'Last Name'}
          placeholderTextColor={'white'}
          onChangeText={(text) => {
            this.setState({ lname: text });
          }}
        />

        <TextInput
          style={styles.input}
          placeholder={'Enter Email'}
          placeholderTextColor={'white'}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder={'Enter Password'}
          placeholderTextColor={'white'}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder={'Re-Enter Password'}
          placeholderTextColor={'white'}
          onChangeText={(text) => {
            this.setState({ repassword: text });
          }}
        />

        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            this.registeruser(email, password, repassword, fname, lname);
          }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
            {' '}
            Register{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
            {' '}
            Login{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'gray',
    width: 250,
    height: 45,
    marginTop: 20,
    borderRadius: 10,
  },
  login: {
    backgroundColor: 'gray',
    marginTop: 25,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'white',
    shadowRadius: 10,
  },
});
