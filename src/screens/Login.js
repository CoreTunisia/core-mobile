import React from "react";
import { View, Text, Button } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>login</Text>
      <Button title='Sign Up' onPress={() => navigation.navigate("Sign Up")} />
    </View>
  );
};

export default Login;
