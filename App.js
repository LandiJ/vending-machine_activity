import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import { TabNavigator, StackNavigator } from "react-navigation";

import Home from "./src/components/Home";
import AboutPage from "./src/components/AboutPage";
import Announcements from "./src/components/Announcements";
import Upcoming from "./src/components/Upcoming";
import Schedule from "./src/components/Schedule";

export default class App extends React.Component {
  render() {
    const AppStack = StackNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          title: "Home"
        }
      },
      About: {
        screen: AboutPage,
        navigationOptions: {
          title: "About Us"
        }
      },
      Announcements: {
        screen: Announcements,
        navigationOptions: {
          title: "Announcements"
        }
      },
      Upcoming: {
        screen: Upcoming,
        navigationOptions: {
          title: "Upcoming Events"
        }
      },
      Schedule: {
        screen: Schedule,
        navigationOptions: {
          title: "Schedule"
        }
      }
    });
    return <AppStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 40
  }
});
