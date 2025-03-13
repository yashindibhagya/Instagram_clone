import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
//import posts from "../assets/data/posts.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function PostListItem({ post }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.userView}>
        <Image source={{ uri: post.user.image_url }} style={styles.user} />
        <Text style={styles.username}>{post.user.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: post.image_url }} style={styles.image} />

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
    paddingVertical: 10, // Adds some spacing around the post
    //marginBottom: 5, // Space between posts
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3, // Keeps the image ratio instead of className="aspect-[4/3]"
  },
  user: {
    width: 40,
    height: 40, // Add explicit height to avoid issues
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
