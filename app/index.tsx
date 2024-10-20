import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Link
        href={"/profile"}
        style={{ color: "blue", textDecorationStyle: "underline" }}
      >
        go to Profile page
      </Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
