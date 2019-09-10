import React from "react";
import { View, StyleSheet, Button } from "react-native";
import img from "../../assets/puppy.webp";
import { Image } from "react-native";

const Login = () => {
    return (<View style={styles.login}>
        <Image
            source={img} style={{ height: "80%", width: "80%" }}>
        </Image>
        <View style={styles.form}>
            <View style={styles.buttonContainer}>
                <Button title="Login" color="#e91e63" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Log Up" color="#9a67ea" sty />
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {

    },
    form: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"

    },
    buttonContainer: {
        width: "20%",
        margin: 5,
        height: "50%",
        fontSize: 30,
        fontWeight: "normal"
    }
})

export default Login;