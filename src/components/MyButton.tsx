import React from "react";
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface MyButtonProps extends TouchableOpacityProps {
  title: string,
}

export function MyButton({ title, style, ...rest }: MyButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#550AB1",
    borderRadius: 8,
    padding: 20,
  },
})



