import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useState, memo } from 'react';
import WebView from 'react-native-webview';
import { octKeysInit } from './data';
import { jsInjector } from './jsInjectString';
import { colors } from '../../constants/colors';
import ModalMixer from './ModalMixer';
import { radius_md, radius_sm } from '../../constants';
import Transpose from '../Transpose';

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
  const [instance, setInstance] = useState('0');
  const [loopCount, setLoopCount] = useState('1');
  const [pitchShift, setPitchShift] = useState('1');
  const [volume, setVolume] = useState('1');

  const sample = (payload: any) => {
    const {
      pitchRes,
      timing,
      instance,
      name,
      volume,
      pitchShift
    } = payload;

    let pitchResArr = '[';
    pitchRes.map((i: any) => pitchResArr += `'${i}',`);
    pitchResArr += ']';

    const js = jsInjector(pitchResArr, timing, instance, played, name, volume, pitchShift);
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

  const playSample = () => {
    const spl = keyName.split('key')[1];
    sample({
      pitchRes: pitchResCalculated,
      timing,
      instance,
      played,
      name: parseInt(spl),
      volume,
      pitchShift
    });
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
        borderColor: 'black',
        width: 100,
      }}
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {
        modalVisible ?
          <ModalMixer payload={{
            modalVisible, setModalVisible, octKeys, pitchRes, setPitchRes, instance,
            timing, loopCount, setInstance, setTiming, setLoopCount, pitchShift, setPitchShift,
            volume, setVolume
          }} /> :
          <View
            style={{
              padding: 17,
              backgroundColor: timing ? (
                played ?
                  colors.orange_dark1 :
                  colors.orange_light1
              ) : 'silver',
              borderWidth: 0.6,
              height: '92%',
              marginTop: 6,
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 0,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 8,
            }}
          >

            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.7,
                borderRadius: radius_sm,
                height: 20,
                backgroundColor: octKeys[keyName.split('key')[1] as any].color,
                opacity: 0.9,
              }}
            >
              <Text style={{
                right: -34,
                fontSize: 18,
                marginTop: -6,
                opacity: 0.9
              }}>...</Text>
            </View>
          </View>
      }

    </TouchableOpacity >
  );
};

export default memo(Mixer);