import { KeyboardAvoidingView, Modal, Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { styles } from './index.styles';
import KeyPicker from './KeyPicker';
import TimingsWrapper from './TimingsWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalTiming } from './modalMixerSlice';
import Transpose from '../Transpose';

const ModalMixer = ({ payload }: any) => {
  const {
    modalVisible,
    setModalVisible,
    octKeys,
    pitchRes,
    setPitchRes,
    instance,
    timing,
    loopCount,
    setInstance,
    setTiming,
    setLoopCount,
    pitchShift,
    setPitchShift,
    volume,
    setVolume
  } = payload;
  const dispatch = useDispatch();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <KeyboardAvoidingView style={styles.centeredView} behavior='padding'>
        <View style={styles.overlay}></View>
        <View style={[styles.modalView, { paddingTop: 60 }]}>

          <KeyPicker octKeys={octKeys} pitchRes={pitchRes} setPitchRes={setPitchRes} />
          <TimingsWrapper
            payload={{
              instance, timing, loopCount, setInstance, setTiming,
              setLoopCount, volume, setVolume, pitchShift, setPitchShift
            }}
          />

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
              dispatch(setGlobalTiming(timing));
            }}>
            <Text style={styles.textStyle}>Save</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal >
  )
}

export default ModalMixer;