import { Modal, Pressable, Text, View } from 'react-native';
import React from 'react';
import { styles } from './index.styles';
import KeyPicker from './KeyPicker';
import TimingsWrapper from './TimingsWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalDelay } from './modalMixerSlice';

const ModalMixer = ({ payload }: any) => {
  const {
    modalVisible,
    setModalVisible,
    octKeys,
    pitchRes,
    setPitchRes,
    delay,
    timing,
    loopCount,
    setDelay,
    setTiming,
    setLoopCount,
    addedToGlobalDelay,
    setAddedToGlobalDelay,
  } = payload;
  const globalDelay = useSelector((state: any) => state.modalMixer.sumDelay);
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
      <View style={styles.overlay}></View>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { paddingTop: 60 }]}>
          <KeyPicker octKeys={octKeys} pitchRes={pitchRes} setPitchRes={setPitchRes} />
          <TimingsWrapper payload={{ delay, timing, loopCount, setDelay, setTiming, setLoopCount }} />

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
              if (parseFloat(timing) + parseFloat(delay) !== globalDelay && !addedToGlobalDelay) {
                dispatch(setGlobalDelay({ timing, delay }));
                setAddedToGlobalDelay(true);
              }
            }}>
            <Text style={styles.textStyle}>Close & Save</Text>
          </Pressable>

        </View>
      </View>
    </Modal >
  )
}

export default ModalMixer;