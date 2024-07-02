import { Image, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';
import logo from '../assets/images/animation.gif';

export function Loading() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222C3C',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight
    },
    image: {
        height: 250,
        width: 250
    }
})