import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import WebView from 'react-native-webview';
import { octKeysInit } from './data';
import KeyPicker from './KeyPicker';
import { jsInjector } from './jsInjectString';
import { setGlobalDelay } from './modalMixerSlice';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './index.styles';
import TimingsWrapper from './TimingsWrapper';

interface Props {
  webViewRef: React.RefObject<WebView<{}>>;
  play: boolean;
  keyName: string
}

const ModalMixer = ({ keyName, webViewRef, play }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [octKeys, setOctKeys] = useState(octKeysInit);
  const [pitchRes, setPitchRes] = useState<any>({});
  const [timing, setTiming] = useState('');
  const [delay, setDelay] = useState('');
  const [loopCount, setLoopCount] = useState('1');
  const [addedToGlobalDelay, setAddedToGlobalDelay] = useState(false);
  const globalDelay = useSelector((state: any) => state.modalMixer.sumDelay);
  const dispatch = useDispatch();

  const sample = ({ pitchRes, timing, delay }: any) => {
    let pitchResArr = '[';
    pitchRes.map((i: any) => pitchResArr += `'${i}',`);
    pitchResArr += ']';

    const js = jsInjector(pitchResArr, timing, delay, loopCount);
    // console.log(js);
    webViewRef.current?.injectJavaScript(js);
  }

  const pitchResCalculated = useMemo(() => {
    let arr: any = [];
    let keys = Object.keys(pitchRes);
    for (var i = 0; i < keys.length; i++) {
      if (pitchRes[keys[i]]) arr.push(keys[i]);
    }
    return arr;
  }, [pitchRes]);

  const playSample = async () => {
    const splKeyName = keyName.split('key')[1];
    if (parseInt(splKeyName) % 10 !== 0) {
      const dl = ((parseInt(splKeyName) % 10) * 1000);;
      await new Promise((r: any) => setTimeout(r, dl));
    }

    sample({ pitchRes: pitchResCalculated, timing, delay });
  };

  useEffect(() => {
    if (
      play &&
      timing
    ) {
      console.log(globalDelay);
      playSample();
    }
  }, [play]);

  return (
    <TouchableOpacity
      style={{
        borderRightWidth: 1,
        borderColor: 'black',
        width: 100
      }}
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {
        modalVisible ?
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
          </Modal > :
          <View
            style={{
              padding: 20
            }}
          >
            <Text>{keyName}</Text>
          </View>
      }

    </TouchableOpacity >
  );
}

export default ModalMixer;