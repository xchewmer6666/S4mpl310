import { StyleSheet } from "react-native";
import { height, radius_sm, width } from "../../constants";


export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: width / 1.2,
    height: height / 1.1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: radius_sm,
    padding: 35,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 5,
  },
  button: {
    borderRadius: radius_sm,
    padding: 10,
    elevation: 2,
    position: 'absolute',
    marginBottom: 20
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'orange',
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Courier',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  overlay: {
    width: width,
    height: height,
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.7
  }
});