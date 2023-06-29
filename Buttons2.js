import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Buttons2({ children, onPress }) {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 14,
    width: "75%",
    alignItems: "center",
    margin: 15
  },
  title: {
    color: "white",
    margin: 8,
    fontSize: 26,
    fontWeight: "600"
  }
});
