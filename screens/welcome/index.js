import { Pressable } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />

        <TextInput style={styles.CnoMgRbV} placeholder="Enter Word"></TextInput>
        
      <Pressable><View style={styles.hLYPgMKS}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center",
    width: 282,
    height: 490,
    position: "absolute",
    left: 33,
    top: 84
  },
  CnoMgRbV: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 252,
    height: 30,
    position: "relative",
    left: 0,
    top: 0
  },
  hLYPgMKS: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: -30,
    borderWidth: 6
  }
});
export default WelcomeScreen;