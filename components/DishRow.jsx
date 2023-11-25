import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import {
  addToBasket,
  removeFromBasket,
  selectBasketitems,
} from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
const iconColor = "#00ccbb";

function currentDishCountInCart(items, id) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      count++;
    }
  }
  return count;
}

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector(selectBasketitems);

  const [count, setCount] = useState(currentDishCountInCart(items, id));

  const handlePress = (intent) => {
    if (intent === "add-to-basket") {
      dispatch(addToBasket({ id, name, description, price, image }));
      setCount(count + 1);
    } else if (intent === "remove-from-basket") {
      if (count > 0) {
        dispatch(removeFromBasket(id));
        setCount(count - 1);
      }
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">
              {description.substring(0, 60)}...
            </Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              source={image}
              className="h-20 w-20 bg-gray-200 p-4"
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={() => {
                handlePress("remove-from-basket");
              }}
            >
              <MinusCircleIcon
                color={iconColor}
                size={40}
                opacity={count > 0 ? 1 : 0.3}
              />
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                handlePress("add-to-basket");
              }}
            >
              <PlusCircleIcon color={iconColor} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
