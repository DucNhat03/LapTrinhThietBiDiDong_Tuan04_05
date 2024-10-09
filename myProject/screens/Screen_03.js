import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function Screen_03({ navigation }) {
  // State quản lý trạng thái checkbox
  const [isChecked, setIsChecked] = useState(false);  // Checkbox đồng ý
  const [isChecked2, setIsChecked2] = useState(false); // Hiển thị mật khẩu
  const [username, setUsername] = useState(""); // Lưu username
  const [email, setEmail] = useState("");       // Lưu email
  const [password, setPassword] = useState(""); // Lưu password
  const [userData, setUserData] = useState([]);  // Mảng lưu trữ thông tin người dùng

  // State để quản lý lỗi cho từng trường
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    checkbox: false,
  });

  // Hàm xử lý khi người dùng nhấn nút "Continue"
  const handleContinue = () => {
    let hasError = false;
    // Kiểm tra các trường nhập liệu và checkbox để xác định lỗi
    const newErrors = {
      username: username === "",  // Nếu username trống, đặt lỗi cho username
      email: email === "",        // Nếu email trống, đặt lỗi cho email
      password: password === "",  // Nếu password trống, đặt lỗi cho password
      checkbox: !isChecked,       // Nếu checkbox chưa tick, đặt lỗi cho checkbox
    };

    // Cập nhật trạng thái lỗi
    setErrors(newErrors);

    // Kiểm tra nếu có bất kỳ lỗi nào
    if (newErrors.username || newErrors.email || newErrors.password || newErrors.checkbox) {
      hasError = true;  // Nếu có lỗi, không chuyển trang
    }

    if (!hasError) {
      // Nếu không có lỗi, lưu thông tin người dùng vào mảng
      const newUser = { username, email, password };

      // Cập nhật mảng userData
      const updatedUserData = [...userData, newUser];
      setUserData(updatedUserData);

      // Chuyển đến Screen_02 và truyền mảng userData đã cập nhật
      navigation.navigate("Screen_02", { userData: updatedUserData });
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
      {/* Phần tiêu đề phía trên */}
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_01")}>
          <Image
            source={require("../assets/data2/back.png")}  // Hình ảnh nút back
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Phần nội dung chính */}
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
          {/* Phần hiển thị hình ảnh và tiêu đề */}
          <View style={{ alignItems: "center", marginTop: 80 }}>
            <Image
              source={require("../assets/data2/Image19.png")}  // Hình ảnh chính
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

          {/* Input cho username */}
          <View style={{ marginTop: 20, marginLeft: 20, borderRadius: 15 }}>
            <Image
              source={require("../assets/data2/codicon_account.png")}  // Icon cho ô nhập username
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
              placeholder={errors.username ? "Username is required" : "Enter your username"}  // Hiển thị lỗi nếu username trống
              style={[
                styles.input,
                { borderColor: errors.username ? "red" : "#EEEEEE" },  // Đổi viền thành đỏ nếu có lỗi
              ]}
              value={username}
              onChangeText={setUsername}  // Cập nhật username khi người dùng nhập
            />
          </View>

          {/* Input cho email */}
          <View style={{ marginTop: 0, marginLeft: 20, borderRadius: 15 }}>
            <Image
              source={require("../assets/data2/Vector.png")}  // Icon cho ô nhập email
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
              placeholder={errors.email ? "Email is required" : "Enter your email address"}  // Hiển thị lỗi nếu email trống
              style={[
                styles.input,
                { borderColor: errors.email ? "red" : "#EEEEEE" },  // Đổi viền thành đỏ nếu có lỗi
              ]}
              value={email}
              onChangeText={setEmail}  // Cập nhật email khi người dùng nhập
            />
          </View>

          {/* Input cho password */}
          <View style={{ marginTop: 0, marginLeft: 20, borderRadius: 15 }}>
            <Image
              source={require("../assets/data2/lock.png")}  // Icon cho ô nhập password
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
              onPress={() => {
                setIsChecked2(!isChecked2);  // Hiển thị/ẩn mật khẩu
              }}
            >
              <Image
                source={require("../assets/data2/eye.png")}  // Icon hiển thị mật khẩu
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                  right: 35,
                  marginTop: 23,
                  position: "absolute",
                  transform: [{ rotate: "180deg" }],
                }}
              />
            </TouchableOpacity>

            <TextInput
              placeholder={errors.password ? "Password is required" : "Enter your password"}  // Hiển thị lỗi nếu password trống
              secureTextEntry={!isChecked2}  // Bật chế độ ẩn password
              style={[
                styles.input,
                { borderColor: errors.password ? "red" : "#EEEEEE" },  // Đổi viền thành đỏ nếu có lỗi
              ]}
              value={password}
              onChangeText={setPassword}  // Cập nhật password khi người dùng nhập
            />
          </View>

          {/* Checkbox đồng ý điều kiện */}
          <View style={{ marginTop: 0, marginLeft: 20, borderRadius: 15 }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View>
                <CheckBox
                  isChecked={isChecked}  // Trạng thái của checkbox
                  onClick={() => setIsChecked(!isChecked)}  // Cập nhật khi người dùng click
                />
              </View>
              <Text style={{ marginLeft: 10 }}>I agree with </Text>
              <Text style={{ color: "#33CCFF", fontWeight: "bold" }}>
                Terms & Conditions
              </Text>
            </View>
            {errors.checkbox && (  // Hiển thị lỗi nếu checkbox chưa được tick
              <Text style={{ color: "red", marginLeft: 20 }}>
                You must agree to the Terms & Conditions
              </Text>
            )}
          </View>

          {/* Nút "Continue" */}
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
              onPress={handleContinue}  // Gọi hàm handleContinue khi nhấn nút
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
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    width: "95%",
    fontSize: 18,
    paddingLeft: 50,
  },
});
