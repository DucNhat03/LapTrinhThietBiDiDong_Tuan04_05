import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useState } from "react";

export default function Screen_02({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ width: "100%" }}>
        <Image
          source={require("../assets/data2/Image 20.png")}
          style={{ width: "100%" }}
          resizeMode="cover"
        />
      </View>

      <View style={{ width: "100%" }}>
        <View
          style={{
            marginTop: 0,
            backgroundColor: "white",
            width: "100%",
            height: 800,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome!</Text>
          </View>

          <View style={{ marginTop: 40, marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Email</Text>
            <TextInput
              placeholder="Enter email"
              style={styles.input}
            ></TextInput>
          </View>

          <View style={{ marginTop: 0, marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Password</Text>
            <TextInput
              placeholder="Enter password"
              style={styles.input}
            ></TextInput>
          </View>

          <View style={{ marginTop: 50, marginLeft: 20 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#33CCFF",
                borderRadius: 10,
                width: "95%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Screen_04")}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#EEEEEE",
    height: 50,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    width: "95%",
    fontSize: 18,
  },
});
