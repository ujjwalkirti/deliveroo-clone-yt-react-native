import { Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const CategoryCard = (props) => {
  const { imgUrl, title } = props;
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
