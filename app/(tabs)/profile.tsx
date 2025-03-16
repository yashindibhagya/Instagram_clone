import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "@/components/Button";

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState('')

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>No Image Selected</Text>
        </View>
      )}

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Pick an Image</Text>
        </Pressable>
      </View>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.textBox}
      />

      <Button name={"Save"} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 9999,
    marginBottom: 10,
    backgroundColor: 'gray'
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    marginBottom: 10,
  },
  placeholderText: {
    color: "#666",
  },
  buttonView: {
    width: "100%",
    marginVertical: 10,
  },
  button: {
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 16,
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '80%'

  }
});


