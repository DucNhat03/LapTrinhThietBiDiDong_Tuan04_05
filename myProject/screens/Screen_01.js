import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen_01({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.style2}>
        <Image
          source={require('../assets/data2/Container 17.png')}
          style={{ width: "95%", height: 400, borderRadius: 25,marginTop: 180}}
        />
      </View>
      <View style={{marginLeft: 20, marginTop: 180}}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>
        Boost Productivity
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18, opacity: 0.25}}>
        Simplify tasks, boost Productivity
        </Text>
      </View>
      <View style={styles.style3}>
        <TouchableOpacity
          style={{
            backgroundColor: "#33CCFF",
            borderRadius: 10,
            width: '95%',
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Screen_03")}
        >
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.style3}>
        <TouchableOpacity
          style={{
            // backgroundColor: "#33CCFF",
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: -40,
            width: 350,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Screen_02")}
        >
          <Text style={{fontSize: 20, fontWeight: 'none', color: 'black'}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', top: -20}}>
          <Text style={{fontSize: 18, color: '#33CCFF', top: -20, textAlign: 'center',}}>
            <Text> o </Text>
            <Text style={{backgroundColor: '#00CCFF', borderRadius: 100, fontSize: 8,top: -2}}> o </Text>
            <Text> o </Text>
          </Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  style1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  style2: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
