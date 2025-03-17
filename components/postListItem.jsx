import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required transformations.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { cld } from "./lib/cloudinary";

export default function PostListItem({ post }) {
  const { width } = useWindowDimensions();

  // Check if post.image_url exists; if not, use Cloudinary
  const imageUrl = post.image_url
    ? post.image_url
    : cld.image(post.image).resize(thumbnail().width(width).height(width)).toURL();

  // Debug: Check the final image URL
  //console.log("Final Image URL:", imageUrl);

  return (
    <View style={styles.container}>
      {/* Header: User Info */}
      <View style={styles.userView}>
        <Image source={{ uri: post.user.image_url }} style={styles.user} />
        <Text style={styles.username}>{post.user.username}</Text>
      </View>

      {/* Post Image */}
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <Text style={{ textAlign: "center", color: "red" }}>Image not available</Text>
      )}

      {/* Icons */}
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <AntDesign name="hearto" size={20} />
          <Ionicons name="chatbubble-outline" size={20} />
          <Feather name="send" size={20} />
        </View>
        <Feather name="bookmark" size={20} style={{ marginLeft: "auto" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3, // Maintains a 4:3 ratio
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  userView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 5,
    gap: 5,
  },
  username: {
    fontWeight: "600",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  leftIcons: {
    flexDirection: "row",
    gap: 10,
  },
});
