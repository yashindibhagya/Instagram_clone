import { View, Text, Image, StyleSheet, TextInput } from "react-native";
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    flexDirection: 1,
  },
  textButton: {
    color: "blue",
    fontWeight: "500",
    marginTop: 10,
  },
  placeholder: {
    padding: 10,
  },
});
