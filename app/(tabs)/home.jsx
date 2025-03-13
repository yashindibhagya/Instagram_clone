import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import posts from "../../assets/data/posts.json";
import PostListItem from "@/components/postListItem";

const post1 = posts[0];
export default function Home() {
  //console.log(post1);

  return (
    <View style={styles.container}>
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
