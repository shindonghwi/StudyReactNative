import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View>
      <Text>
        Image Detail: {title} - {score}
      </Text>
      <Image source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
