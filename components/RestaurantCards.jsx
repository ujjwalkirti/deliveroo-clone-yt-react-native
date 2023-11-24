import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const iconColor = "#00ccbb";
const starColor = "green";
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={starColor} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">
            Nearby . {address.substring(0, 20)}...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
