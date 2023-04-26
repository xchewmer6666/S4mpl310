
import { StyleSheet } from "react-native";
import { width } from "../../constants";
import { globalStyles } from "../../constants/globalStyles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: (width / 2) - 20,
    height: 100,
    borderRadius: 1,
    ...globalStyles.shadow
  },
  text: {
    fontFamily: 'Courier'
  },
  submit: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderRadius: 3,
  },

});