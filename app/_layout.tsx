import { Stack } from "expo-router";
import { View, Text } from "react-native";
const layout = () => {
  return (
    <Stack
      initialRouteName="(modals)/login/index"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="(modals)/login/index" />
      <Stack.Screen name="(modals)/forget/index" />
      {/* <Stack.Screen name="(tabs)" /> */}
    </Stack>
  );
};
export default layout;
