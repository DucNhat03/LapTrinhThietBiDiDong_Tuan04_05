import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function Screen_02({ navigation }) {
  const [isChecked3, setIsChecked3] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/data2/Image 20.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/data2/Vector.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder="Enter email"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/data2/lock.png")}
            style={styles.icon}
          />
          <TouchableOpacity
            style={styles.eyeButton} 
            onPress={() => {
              setIsChecked3(!isChecked3);
              document.getElementById('eye-hide').style.display='none'
              document.getElementById('eye-show').style.display='block'

            }}
          >
            <Image id="eye-hide"
              source={require("../assets/data2/hide-eye.png")}
              style={[
                styles.eyeIcon,
                {
                  transform: [{ rotate: isChecked3 ? "0deg" : "180deg" }],
                  display: 'block'
                },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.eyeButton} 
            onPress={() => {
              setIsChecked3(!isChecked3);
              document.getElementById('eye-show').style.display='none'
              document.getElementById('eye-hide').style.display='block'

            }}
          >
            <Image id="eye-show"
              source={require("../assets/data2/eye.png")}
              style={[
                styles.eyeIcon,
                {
                  transform: [{ rotate: isChecked3 ? "0deg" : "180deg" }],
                  display: 'none'
                },
              ]}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Enter password"
            secureTextEntry={!isChecked3}
            style={styles.input}
          />
        </View>

        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Screen_04")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  imageContainer: {
    width: "100%",
  },
  headerImage: {
    width: "100%",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "white",
    height: 800,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  welcomeContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 15,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: 10,
    marginTop: 23,
    position: "absolute",
  },
  eyeButton: {
    position: "absolute",
    right: 10,
    top: 15,
    
  },
  eyeIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    right: 20,
    top: 8,
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
    borderRadius: 5,
  },
  loginButtonContainer: {
    marginTop: 50,
    marginLeft: 20,
  },
  loginButton: {
    backgroundColor: "#33CCFF",
    borderRadius: 10,
    width: "95%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

