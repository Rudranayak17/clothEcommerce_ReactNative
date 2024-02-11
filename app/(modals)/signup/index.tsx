import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../../assets/images/logo.png";

import { useRouter } from "expo-router";

const SignUp = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        {isNameFocused ? <Text>Name</Text> : null}
        <TextInput
          style={styles.input}
          placeholder={!isNameFocused ? "Name" : ""}
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
        />
      </View>
      <View style={styles.inputContainer}>
        {isEmailFocused ? <Text>Email</Text> : null}
        <TextInput
          style={styles.input}
          placeholder={!isEmailFocused ? "Email" : ""}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
      </View>
      <View style={styles.inputContainer}>
        {isPasswordFocused ? <Text>Password</Text> : null}
        <TextInput
          style={styles.input}
          placeholder={!isPasswordFocused ? "Password" : ""}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
      </View>
    
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      {/* <Text style={styles.loginSocialMediaText}>
        or login with Social Media
      </Text>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity style={styles.socialMediaButton}>
          <Image source={googleimg} style={styles.socialMediaIcon} />
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Do you have an account ?</Text>
        <TouchableOpacity onPress={() => router.navigate("/login")}>
          <Text style={{ color: "blue", fontSize: 17 }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  logoContainer: {
    marginTop: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
  },
  input: {
    height: 40,
  },
  forgetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 10,
  },
  forgetPasswordText: {
    marginRight: 5,
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
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  orText: {
    marginHorizontal: 10,
    color: "black",
    fontSize: 16,
    fontWeight: "300",
  },
  loginSocialMediaText: {
    textAlign: "center",
    marginVertical: 10,
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialMediaButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
  },
  socialMediaIcon: {
    width: 30,
    height: 30,
  },
});

export default SignUp;
