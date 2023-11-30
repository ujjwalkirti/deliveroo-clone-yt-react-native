import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCards";
import dishes from "../dummy data/dishes";
const iconColor = "#00ccbb";
const FeaturedRow = ({ title, description, id }) => {
  return (
    <View className="">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={iconColor} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Jalaram's Khichdi"
          rating={4}
          genre="North-Indian"
          address="Opposite SVNIT, Icchhanath-Dumas Road, Surat - 395007"
          short_description="Authentic North Indian food, only Veg. (Jain also available)"
          dishes={dishes}
          lat={21.170748137305438}
          long={72.7888514415796}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Jalaram's Khichdi"
          rating={4}
          genre="North-Indian"
          address="Opposite SVNIT, Icchhanath-Dumas Road, Surat - 395007"
          short_description="Authentic North Indian food, only Veg. (Jain also available)"
          dishes={dishes}
          lat={21.170748137305438}
          long={72.7888514415796}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Jalaram's Khichdi"
          rating={4}
          genre="North-Indian"
          address="Opposite SVNIT, Icchhanath-Dumas Road, Surat - 395007"
          short_description="Authentic North Indian food, only Veg. (Jain also available)"
          dishes={dishes}
          lat={21.170748137305438}
          long={72.7888514415796}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Jalaram's Khichdi"
          rating={4}
          genre="North-Indian"
          address="Opposite SVNIT, Icchhanath-Dumas Road, Surat - 395007"
          short_description="Authentic North Indian food, only Veg. (Jain also available)"
          dishes={dishes}
          lat={21.170748137305438}
          long={72.7888514415796}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Jalaram's Khichdi"
          rating={4}
          genre="North-Indian"
          address="Opposite SVNIT, Icchhanath-Dumas Road, Surat - 395007"
          short_description="Authentic North Indian food, only Veg. (Jain also available)"
          dishes={dishes}
          lat={21.170748137305438}
          long={72.7888514415796}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
