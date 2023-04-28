import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import WebView from 'react-native-webview';
import { octKeysInit } from './data';
import { jsInjector } from './jsInjectString';
import { colors } from '../../constants/colors';
import ModalMixer from './ModalMixer';

interface Props {
  webViewRef: React.RefObject<WebView<{}>>;
  played: boolean;
  keyName: string
}

const Mixer = ({ keyName, webViewRef, played }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [octKeys, setOctKeys] = useState(octKeysInit);
  const [pitchRes, setPitchRes] = useState<any>({});
  const [timing, setTiming] = useState('');
  const [delay, setDelay] = useState('0');
  const [loopCount, setLoopCount] = useState('1');
  const [addedToGlobalDelay, setAddedToGlobalDelay] = useState(false);

  const sample = ({ pitchRes, timing, delay }: any) => {
    let pitchResArr = '[';
    pitchRes.map((i: any) => pitchResArr += `'${i}',`);
    pitchResArr += ']';

    const js = jsInjector(pitchResArr, timing, delay, played);
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
    sample({ pitchRes: pitchResCalculated, timing, delay, played });
  };

  useEffect(() => {
    if (
      timing
    ) {
      playSample();
    }
  }, [played]);

  return (
    <TouchableOpacity
      style={{
        borderLeftWidth: 1,
        borderColor: 'black',
        width: 100
      }}
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {
        modalVisible ?
          <ModalMixer payload={{
            addedToGlobalDelay, octKeys, pitchRes, delay, timing, loopCount, modalVisible,
            setModalVisible, setPitchRes, setDelay, setTiming, setLoopCount, setAddedToGlobalDelay,
          }} /> :
          <View
            style={{
              padding: 20,
              backgroundColor: timing ? (
                played ?
                  colors.orange_dark1 :
                  colors.orange_light1
              ) : 'silver',
              height: '100%',
            }}
          >
            <Text style={{ fontSize: 30, marginTop: -20 }}>...</Text>
          </View>
      }

    </TouchableOpacity >
  );
}

export default Mixer;