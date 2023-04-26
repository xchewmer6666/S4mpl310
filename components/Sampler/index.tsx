import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import WebView from 'react-native-webview';
import { FlashList } from "@shopify/flash-list";
import { Picker } from '@react-native-picker/picker';

import { styles } from './styles';
import { margin_bg, width } from '../../constants';
import { globalStyles } from '../../constants/globalStyles';

import ModalMixer from '../ModalMixer';
import Tiles from './Tiles';

interface Props {
  webViewRef: React.RefObject<WebView<{}>>
}

const Sampler = ({ webViewRef }: Props) => {
  const [mySamples, setMySamples] = useState([{ name: 'hu.wav', clicked: false, date: Date.now().toString() }]);
  const [pickedSample, setPickedSamples] = useState({ name: '', clicked: false, date: Date.now().toString() });
  const [pressed, setPressed] = useState(false);

  const filter = () => {
    webViewRef.current?.injectJavaScript(`
    filter = new Tone.Filter().toDestination();
    // set values using an object
    filter.set({
      frequency: "C2",
      type: "highpass"
    });
    player = new Tone.Player("hu.wav").connect(filter);
    player.autostart = true;true;
    `);
  };

  const attack = () => {
    webViewRef.current?.injectJavaScript(`
    notes = [
      { pitch: "", timing: 1 },
      { pitch: "", timing: 2 },
      { pitch: "", timing: 0.5 },
      { pitch: "", timing: 0.2 },
    ];
    sampler = new Tone.Sampler({
      urls: {
        A1: "hu.wav",
      },
      baseUrl: "assets/",
      onload: () => {
        // sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.1);
        let delay = Tone.now();
        
        for(let i = 0; i < notes.length; i++) {
          delay += notes[i].timing;
          sampler.triggerAttackRelease("A1", 1, delay);
        }
      }
    }).toDestination();true;
    `);
  };

  const testSaveBlob = () => {
    webViewRef.current?.injectJavaScript(`
    // generate a few notes
    recorder = new Tone.Recorder();
    recorder.start();
    synth2 = new Tone.Synth().connect(recorder);
    synth2.triggerAttackRelease("C3", 0.5);
    synth2.triggerAttackRelease("C4", 0.5, "+1");
    synth2.triggerAttackRelease("C5", 0.5, "+2");
    // wait for the notes to end and stop the recording
    setTimeout(async () => {
      // the recorded audio is returned as a blob
      recording = await recorder.stop();
      // download the recording by creating an anchor element and blob url
      url = URL.createObjectURL(recording);
      // anchor = document.createElement("a");
      // anchor.download = "recording2.webm";
      // anchor.href = url;
      // anchor.click();
      window.ReactNativeWebView.postMessage(url);
    }, 4000);true;
    `)
  }

  return (

    <View>
      <View
        style={{
          margin: margin_bg,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Courier' }}>Sampler_Module</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >


        <View style={{
          marginTop: 20,
        }}>
          <Text style={[styles.text, { color: 'white', fontSize: 20, margin: margin_bg }]}>My_Samples:</Text>
          <View
            style={{
              width: width / 2,
              marginTop: -50,
            }}
          >
            <Picker
              selectedValue={pickedSample}
              onValueChange={(itemValue, itemIndex) => {
                setPickedSamples(itemValue);
                console.log(itemValue);
              }}
            >
              <Picker.Item color="#fff" style={{ backgroundColor: "white", color: "#fff", }} label="hu.wav" value="hu.wav" />
              <Picker.Item color="white" style={{ backgroundColor: "white", color: "white", }} label="null" value="" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, { height: 60, width: 100 }]}
          onPress={() => attack()}
        >
          <Text style={styles.text}>init</Text>
        </TouchableOpacity>

      </View>

      <Tiles webViewRef={webViewRef} />

    </View>
  )
}

export default Sampler;