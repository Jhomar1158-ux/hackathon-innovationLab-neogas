import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={require('../assets/hamburgerIcon.png')} style={styles.optionsPic} />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/LogoNeoGas.png')} style={styles.logo} />
            </View>
            <TouchableOpacity style={styles.profileContainer}>
                <Image source={require('../assets/profilePhoto.jpg')} style={styles.profilePic} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    logoContainer: {
        flex: 3,
        alignItems: 'center',
    },
    logo: {
        height: 60,
        resizeMode: 'contain',
        zIndex: 1,
    },
    profileContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    profilePic: {
        width: 44,
        height: 44,
        borderRadius: 22, 
        resizeMode: 'cover',
    },
    optionsPic: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
});

export default Navbar;
