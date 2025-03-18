//cloudinary - yashindib@gmail.com
import { View, Text, Image, StyleSheet, FlatList, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import posts from "../../assets/data/posts.json";
import PostListItem from "@/components/postListItem";
import { supabase } from "@/components/lib/supabase";

const post1 = posts[0];
export default function Home() {
  const [posts, setPosts] = useState([]);


  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ paddingBottom: 40, width: "100%" }} // Extra space for the last item
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
