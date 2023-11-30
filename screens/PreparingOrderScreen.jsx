import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000); //4 seconds delay before navigating to Delivery Screen.
  }, []);
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center p-2">
      <Animatable.Image
        source={require("../assets/images/processing-order.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-64 w-64 rounded-full"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle indeterminate={true} size={60} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
