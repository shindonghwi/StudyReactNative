import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View>
      <Text>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Deni"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to ImageScreen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to CounterScreen"
        onPress={() => navigation.navigate("Count")}
      />
      <Button
        title="Go to Color"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to SquareScreen"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
