import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";

const iconColor = "#00ccbb";
const RestaurantScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(function () {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const {
    params: {
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
    },
  } = useRoute();
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-56 bg-gray-400 p-4"
        />
        <TouchableOpacity
          className="absolute top-6 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color={iconColor} />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-col my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color={`green`} opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text>{rating}</Text> . {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color={`gray`} opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4 italic">
            {short_description}
          </Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color={`gray`} opacity={0.6} size={22} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color={iconColor} />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

        {/* Dishrows */}
        {dishes.map((dish, index) => (
          <DishRow key={index} {...dish} />
        ))}
      </View>
      <Text>{title}</Text>
    </ScrollView>
  );
};

export default RestaurantScreen;
