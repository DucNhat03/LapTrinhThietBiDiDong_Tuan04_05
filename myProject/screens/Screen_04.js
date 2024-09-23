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

export default function Screen_02({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
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
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: 20,
        }}
      >
        <Image
          source={(require = "../assets/data2/back.png")}
          style={{ width: 25, height: 25 }}
        />

        <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: "bold" }}>
          Prodduct name
        </Text>
      </View>

      <View style={{ width: "100%", marginLeft: 20 }}>
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
          <View style={{ width: "100%", marginTop: 10 }}>
            <View style={{ width: "100%" }}>
              <Image
                source={(require = "../assets/data2/Container 7 (3).png")}
                style={{
                  width: "95%",
                  height: 170,
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              source={(require = "../assets/data2/Container 7 (2).png")}
              style={{
                width: 70,
                height: 70,
              }}
            />
            <Image
              source={(require = "../assets/data2/Container 7 (1).png")}
              style={{
                width: 70,
                height: 70,
              }}
            />
            <Image
              source={(require = "../assets/data2/Container 7 (4).png")}
              style={{
                width: 70,
                height: 70,
              }}
            />
            <Image
              source={(require = "../assets/data2/Container 7.png")}
              style={{
                width: 70,
                height: 70,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 28, fontWeight: "bold", color: "#33CCFF" }}
            >
              $2,99
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "red",
                marginLeft: 20,
              }}
            >
              Buy 1 get 1
            </Text>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Product name
            </Text>
            <Text style={{ fontSize: 15, opacity: 0.6 }}>
              Occaecat est deserunt tempor offici
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, opacity: 0.7 }}>Size</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              width: 180,
              height: 30,
              justifyContent: "space-between",
              padding: 10,
              borderRadius: 5,
              marginLeft: -10,
            }}
          >
            <View>
              <Text>XS</Text>
            </View>
            <View>
              <Text>S</Text>
            </View>
            <View>
              <Text>M</Text>
            </View>
            <View>
              <Text>L</Text>
            </View>
            <View>
              <Text>XL</Text>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, opacity: 0.7 }}>Quantity</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "gray",
                width: 30,
                height: 30,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.7,
              }}
            >
              x
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text>2</Text>
            </View>
            <View>
              <Image
                source={(require = "../assets/data2/Button 5.png")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  marginLeft: 20,
                }}
                resizeMethod="cover"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginLeft: 170,
                }}
              >
                Total $4,98
              </Text>
            </View>
          </View>

          <View style={{marginTop: 10}}>
              <View style={{backgroundColor: '#fff', width: '95%'}}>
                <Text style={{fontSize: 18, opacity: 0.7, fontWeight: 'bold'}}>Size guide</Text>
              </View>
              <View style={{backgroundColor: '#fff', width: '95%', marginTop: 10}}>
                <Text style={{fontSize: 18, opacity: 0.7, fontWeight: 'bold'}}>Reviews (99)</Text>
              </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#33CCFF",
                borderRadius: 5,
                width: "95%",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 5,
                paddingBottom: 5
              }}
              onPress={() => navigation.navigate("Screen_01")}
            >
              <Text style={{ fontSize: 18, color: "white" }}>Add to Card</Text>
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
    paddingLeft: 50,
  },
});
