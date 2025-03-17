import { View, Text, Image, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "@/components/Button";
import { uploadImage } from "@/components/lib/cloudinary";

export default function AddPost() {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const createPost = async () => {
    if (!image) {
      return;
    }

    const response = await uploadImage(image);
    //save post in database
    console.log("image id: ", response?.public_id)
  }
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
        style={styles.textInput}
      />

      {/* Share Button */}
      <Button name="Share" onPress={createPost} />
    </View>
  );
}

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
  textInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginVertical: 10,
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