import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { MainParamList } from "../@types";

const { Navigator, Screen } = createStackNavigator<MainParamList>();

export function StackRoutes() {

  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
    return true;
  }

  useFocusEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton
    );
    return () => subscription.remove();
  });

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}
      />

      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}
      />

      <Screen
        name="Scheduling"
        component={Scheduling}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}
      />

      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}
      />

      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}
      />
    </Navigator>
  );
}