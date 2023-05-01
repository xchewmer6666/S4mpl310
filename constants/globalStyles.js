import { StyleSheet } from "react-native";
import { radius_sm } from ".";

export const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: 'red',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textInput: {
    backgroundColor: 'white',
    height: 50,
    width: 200,
    fontFamily: 'Courier',
    borderRadius: radius_sm
  },
});