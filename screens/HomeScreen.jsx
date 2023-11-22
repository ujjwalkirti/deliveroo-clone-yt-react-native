import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UsersIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(function () {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const iconColor = "#00ccbb";

  return (
    <SafeAreaView className={`pt-[${StatusBar.currentHeight}] bg-white`}>
      {/* Header */}
      <View className="flex flex-row items-center px-2 py-3 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h=7 w-7 rounded-full p-4 bg-gray-300"
        />

        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color={`#00ccbb`} />
          </Text>
        </View>

        <UsersIcon style={35} color={`#00ccbb`} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row flex-1 space-x-2 items-center bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={iconColor} />
      </View>

      {/* scroll view */}
      <ScrollView className="bg-gray-100">
        {/* category scroller */}
        <Categories />
        {/* featured section - 3 */}
        <FeaturedRow
          description={`Paid placements from our partners`}
          id={12}
          title={`Featured`}
        />
        <FeaturedRow
          description={`Everyone's been enjoying these juicy discounts!`}
          id={123}
          title={`Tasty Discounts`}
        />
        <FeaturedRow
          description={`Why not support your local restaurant tonight!`}
          id={1234}
          title={`Offers near you!`}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
