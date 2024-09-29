import React from "react";
import CheckBox from "react-native-check-box";
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

export default function Screen_03({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  
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
      <View
        style={{ width: "100%" }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Screen_01")}>
          <Image
            source={(require = "../assets/data2/back.png")}
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
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
          <View style={{ alignItems: "center", marginTop: 80 }}>
            <Image
              source={(require = "../assets/data2/Image 19.png")}
              style={{ width: 70, height: 70 }}
              resizeMode="cover"
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Nice to see you! !
            </Text>
            <Text style={{ fontSize: 15, opacity: 0.6 }}>
              Create your account
            </Text>
          </View>

          <View style={{ marginTop: 20, marginLeft: 20, borderRadius: 15 }}>
            <Image
              source={(require = "../assets/data2/codicon_account.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
                marginLeft: 10,
                marginTop: 23,
                position: "absolute",
              }}
            />
            <TextInput
              placeholder="Enter your username"
              style={styles.input}
            ></TextInput>
          </View>

          <View style={{ marginTop: 0, marginLeft: 20, borderRadius: 15 }}>
            <Image
              source={(require = "../assets/data2/Vector.png")}
              style={{
                width: 22,
                height: 22,
                resizeMode: "contain",
                marginLeft: 10,
                marginTop: 23,
                position: "absolute",
              }}
            />
            <TextInput
              placeholder="Enter your email address"
              style={styles.input}
            ></TextInput>
          </View>

          <View style={{ marginTop: 0, marginLeft: 20, borderRadius: 15 }}>
            <Image
              source={require=("../assets/data2/lock.png")}
              style={{
                width: 27,
                height: 27,
                resizeMode: "contain",
                marginLeft: 10,
                marginTop: 23,
                position: "absolute",
              }}
            />
            <TouchableOpacity 
              onPress={()=>{
                setIsChecked2(!isChecked2);
              }}
              
            >
            <Image
                source={require=("../assets/data2/eye.png")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                  right: 35,
                  marginTop: 23,
                  position: "absolute",
                  transform: [{ rotate: "180deg" }]
                }}
            />
            </TouchableOpacity>
            
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!isChecked2} 
              style={styles.input}
            ></TextInput>
          </View>

          <View style={{ marginTop: 0, marginLeft: 20, borderRadius: 15 }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={{}}>
                <CheckBox
                  isChecked={isChecked}
                  onClick={() => setIsChecked(!isChecked)}
                />
              </View>
              <Text style={{ marginLeft: 10 }}>I gree with </Text>
              <Text style={{ color: "#33CCFF", fontWeight: "bold" }}>
                Tems & Conditions
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 25, marginLeft: 20 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#33CCFF",
                borderRadius: 10,
                width: "95%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Screen_02")}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Continue</Text>
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
    paddingLeft: 50,
  },
});
