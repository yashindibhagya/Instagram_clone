import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        //headerShown: false,
        tabBarShowLabel: false, // Hide text labels
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "black", // Active icon color
        tabBarInactiveTintColor: "gray", // Inactive icon color
        tabBarHideOnKeyboard: true,
        headerTitleAlign: "center",
        headerStyle: {
          height: 60, // Reduce header height
        },
        headerTitleStyle: {
          fontSize: 16, // Smaller font size
          fontWeight: "bold", // Optional: Adjust weight
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "For You",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              <FontAwesome name="home" size={size} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerTitle: "For You",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              <Feather name="type" size={size} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          headerTitle: "Create Post",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              {focused && <View style={styles.activeLine} />}
              <FontAwesome name="home" size={size} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="reel"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              <Ionicons name="globe-outline" size={size} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeTab]}>
              <FontAwesome name="user-circle-o" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    //bottom: 20,
    left: 20,
    right: 20,
    elevation: 5,
    backgroundColor: "#fff",
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 20,
    height: 60,
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 10 },
    //shadowOpacity: 0.1,
    //shadowRadius: 5,
    boxShadow: "0px 10px 5px rgb(0, 0, 0)", // CSS equivalent
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 9,
  },
  activeTab: {
    position: "relative",
  },
  activeLine: {
    position: "absolute",
    top: -16, // Adjust height of the line
    width: 25,
    height: 4,
    backgroundColor: "#074D4E", // Match the active color
    borderRadius: 2,
  },
  middleButton: {
    width: 45,
    height: 45,
    borderRadius: 35,
    backgroundColor: "#074D4E", // Dark green
    justifyContent: "center",
    alignItems: "center",
    top: -20, // Floating effect
    shadowColor: "#000",
    //shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignSelf: "center",
  },
  middleButtonActive: {
    backgroundColor: "#056363", // Slightly different shade when active
  },
});
