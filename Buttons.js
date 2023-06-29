import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Buttons({ children, onPress }) {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    borderRadius: 14,
    width: "85%",
    alignItems: "center",
    margin: 15
  },
  title: {
    color: "white",
    margin: 8,
    fontSize: 28,
    fontWeight: "600"
  }
});
