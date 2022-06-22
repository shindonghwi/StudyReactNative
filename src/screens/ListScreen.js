import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 12 },
    { name: "Friend #2", age: 23 },
    { name: "Friend #3", age: 42 },
    { name: "Friend #4", age: 52 },
    { name: "Friend #5", age: 32 },
    { name: "Friend #6", age: 72 },
  ];

  return (
    <FlatList
      horizontal={false} // 스크롤 방향
      showsVerticalScrollIndicator={false} // 스크롤 인디케이터 표시
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 24,
  },
});

export default ListScreen;
