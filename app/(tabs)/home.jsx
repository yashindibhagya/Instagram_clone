import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import posts from "../../assets/data/posts.json";
import PostListItem from "@/components/postListItem";

const post1 = posts[0];
export default function Home() {
  //console.log(post1);

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ paddingBottom: 40 }} // Extra space for the last item
      ListFooterComponent={<View style={{ height: 20 }} />} // Ensures last item is visible
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
