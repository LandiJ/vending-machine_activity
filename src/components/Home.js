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
  constructor(props) {
    super(props);
    this.state = {};

    this.onAboutPress = this.onAboutPress.bind(this);
    this.onAnnouncePress = this.onAnnouncePress.bind(this);
    this.onUpcomingPress = this.onUpcomingPress.bind(this);
    this.onSchedulePress = this.onSchedulePress.bind(this);
  }
  onAboutPress() {
    const { navigate } = this.props.navigation;
    navigate("About");
  }
  onAnnouncePress() {
    const { navigate } = this.props.navigation;
    navigate("Announcements");
  }
  onUpcomingPress() {
    const { navigate } = this.props.navigation;
    navigate("Upcoming");
  }
  onSchedulePress() {
    const { navigate } = this.props.navigation;
    navigate("Schedule");
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Button title="About Us" onPress={this.onAboutPress} />
        <Button title="Announcements" onPress={this.onAnnouncePress} />
        <Button title="Upcoming Events" onPress={this.onUpcomingPress} />
        <Button title="Schedule" onPress={this.onSchedulePress} />

      </View>
    );
  }
}
