// import React from "react";
// import CheckBox from "react-native-check-box";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Image,
// } from "react-native";
// import { useState } from "react";

// export default function Screen_02({ navigation }) {
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     <View
//       style={{
//         width: "100%",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "white",
//       }}
//     >
//       <View
//         style={{
//           width: "100%",
//           flex: 1,
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           marginLeft: 20,
//         }}
//       >
//         <TouchableOpacity onPress={() => navigation.navigate("Screen_02")}>
//             <Image
//                 source={(require = "../assets/data2/back.png")}
//                 style={{ width: 25, height: 25 }}
//             />
//         </TouchableOpacity>  

//         <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: "bold" }}>
//           Prodduct name
//         </Text>
//       </View>

//       <View style={{ width: "100%", marginLeft: 20 }}>
//         <View
//           style={{
//             marginTop: 0,
//             backgroundColor: "white",
//             width: "100%",
//             height: 800,
//             borderTopLeftRadius: 10,
//             borderTopRightRadius: 10,
//           }}
//         >
//           <View style={{ width: "100%", marginTop: 10 }}>
//             <View style={{ width: "100%" }}>
//               <Image id="img1"
//                 source={(require = "../assets/data2/Container 7 (3).png")}
//                 style={{
//                   width: "95%",
//                   height: 170,
//                   resizeMode: "stretch",
//                   borderRadius: 10,
//                   display: 'block'
//                 }}
//               />
//               <Image id="img2"
//                 source={(require = "../assets/data2/Container 7 (2).png")}
//                 style={{
//                   width: "95%",
//                   height: 170,
//                   resizeMode: "stretch",
//                   borderRadius: 10,
//                   display: 'none'
//                 }}
//               />
//               <Image id="img3"
//                 source={(require = "../assets/data2/Container 7 (1).png")}
//                 style={{
//                   width: "95%",
//                   height: 170,
//                   resizeMode: "stretch",
//                   borderRadius: 10,
//                   display: 'none'
//                 }}
//               />
//               <Image id="img4"
//                 source={(require = "../assets/data2/Container 7 (3).png")}
//                 style={{
//                   width: "95%",
//                   height: 170,
//                   resizeMode: "stretch",
//                   borderRadius: 10,
//                   display: 'none'
//                 }}
//               />
//               <Image id="img5"
//                 source={(require = "../assets/data2/Container 7.png")}
//                 style={{
//                   width: "95%",
//                   height: 170,
//                   resizeMode: "stretch",
//                   borderRadius: 10,
//                   display: 'none'
//                 }}
//               />
              
//             </View>
//           </View>

//           <View
//             style={{
//               width: "95%",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginTop: 10,
//             }}
//           >
//             <TouchableOpacity
//               onPress={()=>{
//                 setIsChecked(!isChecked);
//                 if(isChecked){
//                   document.getElementById('img2').style.display = 'block';
//                   document.getElementById('img1').style.display = 'none';
//                   document.getElementById('img3').style.display = 'none';
//                   document.getElementById('img4').style.display = 'none';
//                   document.getElementById('img5').style.display = 'none';
//                 }
//               }}
//             >
//                 <Image
//                   source={(require = "../assets/data2/Container 7 (2).png")}
//                   style={{
//                     width: 70,
//                     height: 70,
//                   }}
//                 />
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={()=>{
//                 setIsChecked(!isChecked);
//                 if(isChecked){
//                   document.getElementById('img3').style.display = 'block';
//                   document.getElementById('img1').style.display = 'none';
//                   document.getElementById('img2').style.display = 'none';
//                   document.getElementById('img4').style.display = 'none';
//                   document.getElementById('img5').style.display = 'none';
//                 }
//               }}
//             >
//                 <Image
//                   source={(require = "../assets/data2/Container 7 (1).png")}
//                   style={{
//                     width: 70,
//                     height: 70,
//                   }}
//                 />
//             </TouchableOpacity>
            
//             <TouchableOpacity
//                 onPress={()=>{
//                   setIsChecked(!isChecked);
//                   if(isChecked){
//                     document.getElementById('img4').style.display = 'block';
//                     document.getElementById('img1').style.display = 'none';
//                     document.getElementById('img2').style.display = 'none';
//                     document.getElementById('img3').style.display = 'none';
//                     document.getElementById('img5').style.display = 'none';
//                   }
//                 }}
//             >
//                 <Image
//                 source={(require = "../assets/data2/Container 7 (4).png")}
//                 style={{
//                   width: 70,
//                   height: 70,
//                   resizeMode: 'contain'
//                 }}
//               />
//             </TouchableOpacity>
           
//             <TouchableOpacity
//                 onPress={()=>{
//                   setIsChecked(!isChecked);
//                   if(isChecked){
//                     document.getElementById('img5').style.display = 'block';
//                     document.getElementById('img1').style.display = 'none';
//                     document.getElementById('img2').style.display = 'none';
//                     document.getElementById('img4').style.display = 'none';
//                     document.getElementById('img3').style.display = 'none';
//                   }
//                 }}
//             >
//                 <Image
//                   source={(require = "../assets/data2/Container 7.png")}
//                   style={{
//                     width: 70,
//                     height: 70,
//                   }}
//                 />
//             </TouchableOpacity>
            
//           </View>

//           <View
//             style={{
//               marginTop: 10,
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <Text
//               style={{ fontSize: 28, fontWeight: "bold", color: "#33CCFF" }}
//             >
//               $2,99
//             </Text>
//             <Text
//               style={{
//                 fontSize: 12,
//                 fontWeight: "bold",
//                 color: "red",
//                 marginLeft: 20,
//               }}
//             >
//               Buy 1 get 1
//             </Text>
//           </View>

//           <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
//             <View>
//                 <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//                 Product name
//               </Text>
//               <Text style={{ fontSize: 15, opacity: 0.6 }}>
//                 Occaecat est deserunt tempor offici
//               </Text>
//             </View>
//             <View style={{marginLeft: 80, flexDirection: 'row', alignItems: 'center'}}>
//                 <Image
//                   source={require=("../assets/data2/Rating 3.png")}
//                   style={{
//                     width: 25,
//                     height: 25, 
//                   }}
//                 />
//                 <Text style={{paddingLeft: 5, fontWeight: 'bold'}}>
//                 4.5
//                 </Text>
//             </View>
//           </View>

//           <View style={{ marginTop: 10 }}>
//             <Text style={{ fontSize: 18, opacity: 0.7 }}>Size</Text>
//           </View>

//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               backgroundColor: "white",
//               width: 180,
//               height: 30,
//               justifyContent: "space-between",
//               padding: 10,
//               borderRadius: 5,
//               marginLeft: 0,
//               borderWidth: 1,
//               borderColor: "#D3D3D3",
              
//             }}
//           >
//             <TouchableOpacity
//               onPress={()=>{
//                 document.getElementById('size_xs').style.backgroundColor="#33CCFF";
//                 document.getElementById('size_s').style.backgroundColor="#fff";
//                 document.getElementById('size_m').style.backgroundColor="#fff";
//                 document.getElementById('size_l').style.backgroundColor="#fff";
//                 document.getElementById('size_xl').style.backgroundColor="#fff";
//               }}
//             >
//                 <View id="size_xs" style={{padding: 4}}>
//                     <Text>XS</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={()=>{
//                   document.getElementById('size_s').style.backgroundColor="#33CCFF";
//                   document.getElementById('size_xs').style.backgroundColor="#fff";
//                   document.getElementById('size_m').style.backgroundColor="#fff";
//                   document.getElementById('size_l').style.backgroundColor="#fff";
//                   document.getElementById('size_xl').style.backgroundColor="#fff";
//                 }}
//             >
//                 <View id="size_s" style={{padding: 4}}>
//                     <Text>S</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={()=>{
//                   document.getElementById('size_m').style.backgroundColor="#33CCFF";
//                   document.getElementById('size_xs').style.backgroundColor="#fff";
//                   document.getElementById('size_s').style.backgroundColor="#fff";
//                   document.getElementById('size_l').style.backgroundColor="#fff";
//                   document.getElementById('size_xl').style.backgroundColor="#fff";
//                 }}
//             >
//                 <View id="size_m" style={{padding: 4}}>
//                     <Text>M</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={()=>{
//                   document.getElementById('size_l').style.backgroundColor="#33CCFF";
//                   document.getElementById('size_s').style.backgroundColor="#fff";
//                   document.getElementById('size_m').style.backgroundColor="#fff";
//                   document.getElementById('size_xs').style.backgroundColor="#fff";
//                   document.getElementById('size_xl').style.backgroundColor="#fff";
//                 }}
//             >
//                 <View id="size_l" style={{padding: 4}}>
//                     <Text>L</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={()=>{
//                   document.getElementById('size_xl').style.backgroundColor="#33CCFF";
//                   document.getElementById('size_s').style.backgroundColor="#fff";
//                   document.getElementById('size_m').style.backgroundColor="#fff";
//                   document.getElementById('size_l').style.backgroundColor="#fff";
//                   document.getElementById('size_xs').style.backgroundColor="#fff";
//                 }}
//             >
//                 <View id="size_xl" style={{padding: 4}}>
//                     <Text>XL</Text>
//                 </View>
//             </TouchableOpacity>

            
//           </View>

//           <View style={{ marginTop: 10 }}>
//             <Text style={{ fontSize: 18, opacity: 0.7 }}>Quantity</Text>
//           </View>

//           <View
//             style={{
//               marginTop: 10,
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <View
//               style={{
//                 backgroundColor: "gray",
//                 width: 30,
//                 height: 30,
//                 borderRadius: 30,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 opacity: 0.7,
//               }}
//             >
//               x
//             </View>
//             <View style={{ marginLeft: 20 }}>
//               <Text>2</Text>
//             </View>
//             <View>
//               <Image
//                 source={(require = "../assets/data2/Button 5.png")}
//                 style={{
//                   width: 30,
//                   height: 30,
//                   borderRadius: 30,
//                   marginLeft: 20,
//                 }}
//                 resizeMethod="cover"
//               />
//             </View>
//             <View>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   fontWeight: "bold",
//                   marginLeft: 170,
//                 }}
//               >
//                 Total $4,98
//               </Text>
//             </View>
//           </View>

//           <View style={{marginTop: 10}}>
//               <View style={{backgroundColor: '#fff', width: '95%'}}>
//                 <Text style={{fontSize: 18, opacity: 0.7, fontWeight: 'bold'}}>Size guide</Text>
//               </View>
//               <View style={{backgroundColor: '#fff', width: '95%', marginTop: 10}}>
//                 <Text style={{fontSize: 18, opacity: 0.7, fontWeight: 'bold'}}>Reviews (99)</Text>
//               </View>
//           </View>

//           <View style={{ marginTop: 20 }}>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: "#33CCFF",
//                 borderRadius: 5,
//                 width: "95%",
//                 height: 40,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 paddingTop: 5,
//                 paddingBottom: 5
//               }}
//               onPress={() => navigation.navigate("Screen_01")}
//             >
//               <Text style={{ fontSize: 18, color: "white" }}>Add to Card</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "green",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     backgroundColor: "#EEEEEE",
//     height: 50,
//     borderColor: "#EEEEEE",
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     marginTop: 10,
//     width: "95%",
//     fontSize: 18,
//     paddingLeft: 50,
//   },
// });
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Screen_02({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(2.99);

  // Danh sách hình ảnh
  const images = [
    { id: 1, source: require("../assets/data2/Container 7 (3).png") },
    { id: 2, source: require("../assets/data2/Container 7 (2).png") },
    { id: 3, source: require("../assets/data2/Container 7 (1).png") },
    { id: 4, source: require("../assets/data2/Container 7.png") },
  ];

  // Hàm chọn kích thước và thay đổi giá ngẫu nhiên
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    const randomPrice = (Math.random() * 3 + 1).toFixed(2); 
    setPrice(parseFloat(randomPrice));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_02")}>
          <Image
            source={require("../assets/data2/back.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Product name</Text>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.mainImageContainer}>
          <Image
            source={images.find((img) => img.id === selectedImage).source}
            style={styles.mainImage}
          />
        </View>

        <View style={styles.thumbnailContainer}>
          {images.map((img) => (
            <TouchableOpacity
              key={img.id}
              onPress={() => setSelectedImage(img.id)}
            >
              <Image
                source={img.source}
                style={[
                  styles.thumbnail,
                  selectedImage === img.id && styles.thumbnailSelected,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${price.toFixed(2)}</Text>
          <Text style={styles.promotionText}>Buy 1 get 1</Text>
        </View>

        <View style={styles.productInfo}>
          <View>
            <Text style={styles.productName}>Product name</Text>
            <Text style={styles.productDescription}>
              Occaecat est deserunt tempor offici
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Image
              source={require("../assets/data2/Rating 3.png")}
              style={styles.ratingImage}
            />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <View style={styles.sizeLabelContainer}>
          <Text style={styles.sizeLabelText}>Size</Text>
        </View>

        <View style={styles.sizeContainer}>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <TouchableOpacity key={size} onPress={() => handleSizeSelect(size)}>
              <View
                style={[
                  styles.sizeBox,
                  selectedSize === size && styles.sizeSelected,
                ]}
              >
                <Text>{size}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.quantityLabelContainer}>
          <Text style={styles.quantityLabelText}>Quantity</Text>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <Text style={styles.totalText}>
            Total ${(price * quantity).toFixed(2)}
          </Text>
        </View>

        <View style={styles.addToCartContainer}>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => navigation.navigate("Screen_05")}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Add to Cart</Text>
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
  },
  header: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginTop: 10,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: "bold",
  },
  bodyContainer: {
    width: "100%",
    marginLeft: 20,
  },
  mainImageContainer: {
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: "95%",
    height: 200,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  thumbnailContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },
  thumbnailSelected: {
    borderColor: "#33CCFF",
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  priceText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#33CCFF",
  },
  promotionText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
  productInfo: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 15,
    opacity: 0.6,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingImage: {
    width: 25,
    height: 25,
  },
  ratingText: {
    paddingLeft: 5,
    fontWeight: "bold",
  },
  sizeLabelContainer: {
    marginTop: 10,
  },
  sizeLabelText: {
    fontSize: 18,
    opacity: 0.7,
  },
  sizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: 300,
    height: 40,
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    marginLeft: 0,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  sizeBox: {
    padding: 4,
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  sizeSelected: {
    backgroundColor: "#33CCFF",
    borderColor: "#33CCFF",
  },
  quantityLabelContainer: {
    marginTop: 10,
  },
  quantityLabelText: {
    fontSize: 18,
    opacity: 0.7,
  },
  quantityContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  quantityButton: {
    backgroundColor: "gray",
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
  addToCartContainer: {
    marginTop: 20,
  },
  addToCartButton: {
    backgroundColor: "#33CCFF",
    borderRadius: 5,
    width: "95%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
});





