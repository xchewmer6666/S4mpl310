import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import WebView from 'react-native-webview';

import { margin_bg, width } from '../../constants';
import { attack, release } from './handlers';
import { globalStyles } from '../../constants/globalStyles';

import { styles } from './styles';

interface Props {
  webViewRef: React.RefObject<WebView<{}>>
}

const PolySynth = ({ webViewRef }: Props) => {
  const [prevHzInput, setPrevHzInput] = useState<string | undefined>('0');
  const [hzInput, setHzInput] = useState<string | undefined>('0');

  const hzInputHandler = (e: any) => {
    setHzInput(e);
  }

  const submitHzHandler = () => {
    release(webViewRef, prevHzInput);
    setPrevHzInput(hzInput);
  }



  return (
    <View>
      <View
        style={{
          margin: margin_bg,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Courier' }}>PolySynth_Module</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => attack(webViewRef, hzInput)}
        >
          <Text style={styles.text}>Attack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
          onPress={() => release(webViewRef, prevHzInput)}
        >
          <Text style={styles.text}>Release</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: margin_bg,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={globalStyles.textInput}
          keyboardType='numeric'
          placeholder='number_input'
          value={hzInput}
          placeholderTextColor='black'
          onChangeText={hzInputHandler}
        />
        <TouchableOpacity
          style={styles.submit}
          onPress={submitHzHandler}
        >
          <Text>Change hz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PolySynth;