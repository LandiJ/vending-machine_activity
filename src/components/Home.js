import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  Alert
} from "react-native";

export default class Home extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Button title="About Us" onPress={this._onPressButton} />
        <Button title="Upcoming Events" onPress={this._onPressButton} />
        <Button title="Announcents" onPress={this._onPressButton} />
        <Button title="Event schedule" onPress={this._onPressButton} />

      </View>
    );
  }
}
