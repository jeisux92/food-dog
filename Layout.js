import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Constants from 'expo-constants';
import Navigation from "./components/Navigation/Navigation"

const Layout = (props) => {
    return (
        <View style={styles.layout}>
            <View>
                <View style={styles.statusBar} />
            </View>
            <View style={styles.header}>
                <Header></Header>
            </View>
            <View style={styles.container}>
                {props.children}
            </View>
            <View style={styles.footer}>
                <Navigation />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "space-between",
    },
    header: {
        flex: 1
    },
    container: {
        flex: 15
    },
    footer: {
        flex: 1
    },
    statusBar: {
        backgroundColor: "#b0003a",
        height: Constants.statusBarHeight,
    },
})

export default Layout;
