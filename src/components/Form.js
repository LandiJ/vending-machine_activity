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

export default class Form extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }
  constructor(props) {
    super(props);
    this.state = { text: "", password: "" };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40, borderWidth: 1, width: 200, marginBottom: 30 }}
            placeholder="Username"
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            style={{ height: 40, borderWidth: 1 }}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
          />

          <Button title="Login" onPress={this._onPressButton} />
        </View>

      </TouchableWithoutFeedback>
    );
  }
}
