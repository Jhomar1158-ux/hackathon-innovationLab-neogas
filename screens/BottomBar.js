import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

const BottomBar = ({ onLeftPress, onCenterPress, onRightPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
                <Image source={require('../assets/notificationIcon.png')} style={styles.option1} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onCenterPress} style={styles.centerIconContainer}>
                <Image source={require('../assets/LogoNeoGas2.png')} style={styles.option} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
                <Image source={require('../assets/historyIcon.png')} style={styles.option2} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
    },
    centerIconContainer: {
        flex: 2,
        alignItems: "center",
    },
    option: {
        width: 43,
        height: 43,
    },
    option1: {
        width: 35,
        height: 35,
    },
    option2: {
        width: 35,
        height: 35,
    },
});

export default BottomBar;
