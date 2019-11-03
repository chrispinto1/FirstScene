import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Dimensions } from "react-native";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DropdownMenu from 'react-native-dropdown-menu';

class HomeScreen extends React.Component{
  render(){
    const data = [["EMS Department", "Fire Department", "Police Department"]]
    
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.appName}>FirstScene</Text>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            placeholder="Name"
          />
            <DropdownMenu
              style={{flex: 1}}
              bgColor={'white'}
              tintColor={'teal'}
              activityTintColor={'green'}
              data={data}
            ></DropdownMenu>
            <View style={{height: 120}} />

          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            placeholder="Badge Number"
          />

          <Button
          style= {{}}
          title="Login"
          onPress={() => this.props.navigation.navigate('Incidents')}
        />
        </ScrollView>
      </View>
    );
  }
}
class IncidentNumberScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Incidents: IncidentNumberScreen
});

export default createAppContainer(AppNavigator);

var width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appName: {
    width: width,
    height: 100,
    fontSize: 40,
    textAlign: 'center'
  },
  input: {
    textAlign:"center", 
    marginBottom: 5, 
    height: 40, 
    width: (width * .75) ,
    borderColor: 'gray', 
    borderWidth: 1, 
    marginLeft: 30 
  }
});
