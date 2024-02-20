import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        
        
      <TextInput style={styles.CnoMgRbV} placeholder="Enter Word"></TextInput><Pressable onPress={() => {
        navigation.navigate("");
      }}><Text style={styles.YcQdVccC}>Lorem ipsum…</Text></Pressable></ScrollView>
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
  YcQdVccC: {
    width: 274,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 0,
    left: 32
  }
});
export default WelcomeScreen;