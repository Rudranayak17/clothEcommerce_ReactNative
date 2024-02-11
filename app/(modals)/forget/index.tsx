import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import logo from "../../../assets/images/logo.png";

const Index = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.instructions}>
        Please, enter your email address. You will receive a link to create a new password via email.
      </Text>
      <View style={styles.inputContainer}>
        {isEmailFocused && <Text>Email</Text>}
        <TextInput
          style={styles.input}
          placeholder={!isEmailFocused ? "Email" : ""}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 15,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  instructions: {
    marginBottom: 15,
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 15,
    borderRadius: 15,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: "#DB3022",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  loginButtonText: {
    fontWeight: "600",
    color: "white",
    fontSize: 18,
  },
  input: {
    height: 40,
  },
});

export default Index;
