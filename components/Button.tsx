import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

type ButtonProps = {
    name: string;
    onPress?: () => void;
};

export default function Button({ name, onPress }: ButtonProps) {
    return (
        <View style={styles.buttonView}>
            <Pressable onPress={onPress}
                style={styles.button}>
                <Text style={styles.buttonText}>{name}</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 12,
        alignItems: "center",
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center'
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonView: {
        width: "100%",
        marginVertical: 10,
    },
})