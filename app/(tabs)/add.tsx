import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function AddPost() {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  useEffect(() =>{
    if(!image){
      pickImage();
    }
  },[image]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],      
      allowsEditing: true,
      aspect: [4, 3],
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

      {/* Button for Picking Image */}
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Pick an Image</Text>
        </Pressable>
      </View>

      {/* Caption Input */}
      <TextInput
        value={caption}
        onChangeText={setCaption}
        placeholder="Enter caption..."
        //style={styles.textInput}
      />

      {/* Share Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Share</Text>
      </Pressable>
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
    height: 250,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'gray'
  },
  textButton: {
    color: "#fff",
    padding: 10,
    textAlign: "center",
  },
  buttonView: {
    width: "100%",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  imagePlaceholder: {
    width: 200,
    height: 250,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  placeholderText: {
    color: "#666",
  },
});

