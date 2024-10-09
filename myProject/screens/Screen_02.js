import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function Screen_02({ navigation, route }) {
  // Lấy mảng userData từ Screen_03 được truyền qua navigation
  const { userData } = route.params;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked3, setIsChecked3] = useState(false);

  // State để lưu trạng thái lỗi cho từng trường
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    invalidLogin: false, // Khi thông tin email và password không khớp với userData
  });

  // Hàm xử lý khi người dùng nhấn nút "Login"
  const handleLogin = () => {
    let hasError = false;
  
    // Kiểm tra xem các trường có trống hay không
    const newErrors = {
      email: email === "",       // Nếu email trống
      password: password === "", // Nếu password trống
      invalidLogin: false,       // Reset lỗi đăng nhập sai
    };
  
    setErrors(newErrors);
  
    // Kiểm tra nếu có bất kỳ trường nào trống
    if (newErrors.email || newErrors.password) {
      hasError = true;
    }
  
    if (!hasError) {
      // Loại bỏ khoảng trắng và chuyển email về chữ thường để so sánh
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedPassword = password.trim();
  
      // Kiểm tra xem người dùng có trong mảng userData không
      const user = userData.find(
        (user) => 
          user.email.trim().toLowerCase() === trimmedEmail && 
          user.password.trim() === trimmedPassword
      );
  
      if (user) {
        // Nếu tìm thấy người dùng, chuyển đến Screen_04
        navigation.navigate("Screen_04");
      } else {
        // Nếu không tìm thấy, cập nhật lỗi đăng nhập sai
        setErrors((prevErrors) => ({ ...prevErrors, invalidLogin: true }));
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/data2/Image20.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
        </View>

        {/* Input cho email */}
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/data2/Vector.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder={errors.email ? "Email is required" : "Enter email"}
            style={[
              styles.input,
              { borderColor: errors.email ? "red" : "#EEEEEE" }, // Đổi màu viền nếu có lỗi
            ]}
            value={email}
            onChangeText={setEmail} // Cập nhật email khi người dùng nhập
          />
          {errors.email && (
            <Text style={styles.errorText}>Please enter your email.</Text>
          )}
        </View>

        {/* Input cho password */}
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/data2/lock.png")}
            style={styles.icon}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => {
              setIsChecked3(!isChecked3); // Hiển thị/ẩn mật khẩu
            }}
          >
            <Image
              source={require("../assets/data2/eye.png")}
              style={[
                styles.eyeIcon,
                { transform: [{ rotate: isChecked3 ? "0deg" : "180deg" }] },
              ]}
            />
          </TouchableOpacity>
          <TextInput
            placeholder={errors.password ? "Password is required" : "Enter password"}
            secureTextEntry={!isChecked3} // Hiển thị hoặc ẩn mật khẩu
            style={[
              styles.input,
              { borderColor: errors.password ? "red" : "#EEEEEE" }, // Đổi màu viền nếu có lỗi
            ]}
            value={password}
            onChangeText={setPassword} // Cập nhật password khi người dùng nhập
          />
          {errors.password && (
            <Text style={styles.errorText}>Please enter your password.</Text>
          )}
        </View>

        {/* Hiển thị lỗi nếu email hoặc password không khớp */}
        {errors.invalidLogin && (
          <Text style={styles.errorText}>
            Incorrect email or password. Please try again.
          </Text>
        )}

        {/* Nút "Login" */}
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin} // Gọi hàm handleLogin khi nhấn nút
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginLeft: 10,
    marginTop: -15,
    marginBottom: 10,
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
