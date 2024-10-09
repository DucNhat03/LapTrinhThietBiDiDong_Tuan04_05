import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useState } from "react";

export default function Screen_04({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(2.99);
  const [selectedSize, setSelectedSize] = useState("XS"); // Kích thước mặc định
  const handleSizeChange = (size) => {
    setSelectedSize(size); // Cập nhật kích thước đã chọn
    // Cập nhật giá dựa trên kích thước
    switch (size) {
      case "S":
        setPrice(3.99);
        break;
      case "M":
        setPrice(4.99);
        break;
      case "L":
        setPrice(5.99);
        break;
      case "XL":
        setPrice(6.99);
        break;
      default:
        setPrice(2.99); // Giá mặc định cho XS
    }
  };
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
      {/*  Product name, button back*/}
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
        <TouchableOpacity onPress={() => navigation.navigate("Screen_02")}>
            <Image
                source={(require = "../assets/data2/back.png")}
                style={{ width: 25, height: 25 }}
            />
        </TouchableOpacity>  

        <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: "bold" }}>
          Prodduct name
        </Text>
      </View>

      {/*  Image container */}
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
              <Image id="img1"
                source={(require = "../assets/data2/Container7(3).png")}
                style={{
                  width: "95%",
                  height: 170,
                  resizeMode: "stretch",
                  borderRadius: 10,
                  display: 'block'
                }}
              />
              <Image id="img2"
                source={(require = "../assets/data2/Container7(2).png")}
                style={{
                  width: "95%",
                  height: 170,
                  resizeMode: "stretch",
                  borderRadius: 10,
                  display: 'none'
                }}
              />
              <Image id="img3"
                source={(require = "../assets/data2/Container7(1).png")}
                style={{
                  width: "95%",
                  height: 170,
                  resizeMode: "stretch",
                  borderRadius: 10,
                  display: 'none'
                }}
              />
              <Image id="img4"
                source={(require = "../assets/data2/Container7(3).png")}
                style={{
                  width: "95%",
                  height: 170,
                  resizeMode: "stretch",
                  borderRadius: 10,
                  display: 'none'
                }}
              />
              <Image id="img5"
                source={(require = "../assets/data2/Container7.png")}
                style={{
                  width: "95%",
                  height: 170,
                  resizeMode: "stretch",
                  borderRadius: 10,
                  display: 'none'
                }}
              />
              
            </View>
          </View>

          {/*  Slide image */}
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={()=>{
                setIsChecked(!isChecked);
                if(isChecked){
                  document.getElementById('img2').style.display = 'block';
                  document.getElementById('img1').style.display = 'none';
                  document.getElementById('img3').style.display = 'none';
                  document.getElementById('img4').style.display = 'none';
                  document.getElementById('img5').style.display = 'none';
                }
              }}
            >
                <Image
                  source={(require = "../assets/data2/Container7(2).png")}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                setIsChecked(!isChecked);
                if(isChecked){
                  document.getElementById('img3').style.display = 'block';
                  document.getElementById('img1').style.display = 'none';
                  document.getElementById('img2').style.display = 'none';
                  document.getElementById('img4').style.display = 'none';
                  document.getElementById('img5').style.display = 'none';
                }
              }}
            >
                <Image
                  source={(require = "../assets/data2/Container7(1).png")}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={()=>{
                  setIsChecked(!isChecked);
                  if(isChecked){
                    document.getElementById('img4').style.display = 'block';
                    document.getElementById('img1').style.display = 'none';
                    document.getElementById('img2').style.display = 'none';
                    document.getElementById('img3').style.display = 'none';
                    document.getElementById('img5').style.display = 'none';
                  }
                }}
            >
                <Image
                source={(require = "../assets/data2/Container7(4).png")}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
           
            <TouchableOpacity
                onPress={()=>{
                  setIsChecked(!isChecked);
                  if(isChecked){
                    document.getElementById('img5').style.display = 'block';
                    document.getElementById('img1').style.display = 'none';
                    document.getElementById('img2').style.display = 'none';
                    document.getElementById('img4').style.display = 'none';
                    document.getElementById('img3').style.display = 'none';
                  }
                }}
            >
                <Image
                  source={(require = "../assets/data2/Container7.png")}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
            </TouchableOpacity>
            
          </View>
          {/*  Price */}
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
              {price}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "bold",
                color: "red",
                marginLeft: 20,
                borderWidth: 1,
                borderColor: "red",
                borderRadius: 5,
                padding: 2,
              }}
            >
              Buy 1 get 1
            </Text>
          </View>
          {/*  Product name, des, image */}
          <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Product name
              </Text>
              <Text style={{ fontSize: 15, opacity: 0.6 }}>
                Occaecat est deserunt tempor offici
              </Text>
            </View>
            <View style={{marginLeft: 80, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require=("../assets/data2/Rating3.png")}
                  style={{
                    width: 25,
                    height: 25, 
                  }}
                />
                <Text style={{paddingLeft: 5, fontWeight: 'bold'}}>
                4.5
                </Text>
            </View>
          </View>
          {/*  Size */ }
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
              marginLeft: 0,
              borderWidth: 1,
              borderColor: "#D3D3D3",
              
            }}
          >
            <TouchableOpacity
              onPress={()=>{
                handleSizeChange("XS");
                document.getElementById('size_xs').style.backgroundColor="#33CCFF";
                document.getElementById('size_s').style.backgroundColor="#fff";
                document.getElementById('size_m').style.backgroundColor="#fff";
                document.getElementById('size_l').style.backgroundColor="#fff";
                document.getElementById('size_xl').style.backgroundColor="#fff";
              }}
            >
                <View id="size_xs" style={{padding: 4}}>
                    <Text>XS</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                  handleSizeChange("S");
                  document.getElementById('size_s').style.backgroundColor="#33CCFF";
                  document.getElementById('size_xs').style.backgroundColor="#fff";
                  document.getElementById('size_m').style.backgroundColor="#fff";
                  document.getElementById('size_l').style.backgroundColor="#fff";
                  document.getElementById('size_xl').style.backgroundColor="#fff";
                }}
            >
                <View id="size_s" style={{padding: 4}}>
                    <Text>S</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                  handleSizeChange("M");
                  document.getElementById('size_m').style.backgroundColor="#33CCFF";
                  document.getElementById('size_xs').style.backgroundColor="#fff";
                  document.getElementById('size_s').style.backgroundColor="#fff";
                  document.getElementById('size_l').style.backgroundColor="#fff";
                  document.getElementById('size_xl').style.backgroundColor="#fff";
                }}
            >
                <View id="size_m" style={{padding: 4}}>
                    <Text>M</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                  handleSizeChange("L");
                  document.getElementById('size_l').style.backgroundColor="#33CCFF";
                  document.getElementById('size_s').style.backgroundColor="#fff";
                  document.getElementById('size_m').style.backgroundColor="#fff";
                  document.getElementById('size_xs').style.backgroundColor="#fff";
                  document.getElementById('size_xl').style.backgroundColor="#fff";
                }}
            >
                <View id="size_l" style={{padding: 4}}>
                    <Text>L</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                  handleSizeChange("XL");
                  document.getElementById('size_xl').style.backgroundColor="#33CCFF";
                  document.getElementById('size_s').style.backgroundColor="#fff";
                  document.getElementById('size_m').style.backgroundColor="#fff";
                  document.getElementById('size_l').style.backgroundColor="#fff";
                  document.getElementById('size_xs').style.backgroundColor="#fff";
                }}
            >
                <View id="size_xl" style={{padding: 4}}>
                    <Text>XL</Text>
                </View>
            </TouchableOpacity>

            
          </View>
          {/*  Quantity */ }
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, opacity: 0.7 }}>Quantity</Text>
          </View>
              
          <View style={styles.quantityContainer}>
            <View style={{width: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                  <Text style={{fontSize: 18, fontWeight: 'bold',}}
                  >-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => setQuantity(quantity + 1)}
                  >
                    <Text style={{fontSize: 18, fontWeight: 'bold',}}
                    >+</Text>
                  </TouchableOpacity>
            </View>

              <View style={{flexDirection: 'row', alignItems: 'center',}}>
                  <Text>Total:</Text>
                <Text style={styles.totalText}>
                      ${(price * quantity).toFixed(2)}
                </Text>
              </View>
              
              
          </View>
          {/*  Size guide && Review */ }
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
          
          </View>

          <View style={{marginTop: 10}}>
              <View style={{backgroundColor: '#fff', width: '95%'}}>
                <Text style={{fontSize: 18, opacity: 0.7, fontWeight: 'bold'}}>Size guide</Text>
              </View>
              <View style={{backgroundColor: '#fff', width: '95%', marginTop: 10}}>
                <Text style={{fontSize: 18, opacity: 0.7, fontWeight: 'bold'}}>Reviews (99)</Text>
              </View>
          </View>
         { /*  Add to card */ }
          <View style={{ marginTop: 10 }}>
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
              onPress={() => navigation.navigate("Screen_05")}
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
  quantityContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  quantityButton: {
    backgroundColor: "#33CCFF",
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
});





