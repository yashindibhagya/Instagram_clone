import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function AddPost() {
  const [caption, setCaption] = useState("");
  return (
    <View style={styles.container}>
      {/* Image picker */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
      />
      {/* Text Input for caption */}
      <Text onPress={() => {}} style={styles.textButton}>
        Change
      </Text>

      {/* TextInput Caption */}
      <View>
        <TextInput
          value={caption}
          onChangeText={(newValue) => setCaption(newValue)}
          placeholder="What is on your mind"
          style={styles.placeholder}
        />
      </View>
      {/* Button */}
      <View style={styles.buttonView}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    //flexDirection: 1,
    flex: 1,
  },
  textButton: {
    color: "blue",
    fontWeight: "500",
    marginTop: 10,
  },
  placeholder: {
    padding: 10,
    marginRight: 230,
  },
  button: {
    backgroundColor: "blue",
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
  buttonView: {
    marginTop: 350,
    //marginTop: "auto",
  },
});
