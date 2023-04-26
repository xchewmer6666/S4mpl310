import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import WebView from 'react-native-webview';
// import SelectDropdown from 'react-native-select-dropdown';

import { margin_bg, radius_sm } from '../../constants';

import { styles } from './styles';


interface Props {
  webViewRef: React.RefObject<WebView<{}>>
}

const SineWithPartials =
  ["sine1", "sine2", "sine3", "sine4", "sine5", "sine6", "sine7", "sine8", "sine9",
    "sine10", "sine11", "sine12", "sine13", "sine14", "sine15", "sine16", "sine17", "sine18", "sine19",
    "sine20", "sine21", "sine22", "sine23", "sine24", "sine25", "sine26", "sine27", "sine28", "sine29",
    "sine30", "sine31", "sine32"];

const SquareWithPartials =
  ["square1", "square2", "square3", "square4", "square5", "square6", "square7", "square8", "square9",
    "square10", "square11", "square12", "square13", "square14", "square15", "square16", "square17", "square18", "square19",
    "square20", "square21", "square22", "square23", "square24", "square25", "square26", "square27", "square28", "square29",
    "square30", "square31", "square32"];

const SawtoothWithPartials =
  ["sawtooth1", "sawtooth2", "sawtooth3", "sawtooth4", "sawtooth5", "sawtooth6", "sawtooth7", "sawtooth8", "sawtooth9",
    "sawtooth10", "sawtooth11", "sawtooth12", "sawtooth13", "sawtooth14", "sawtooth15", "sawtooth16", "sawtooth17", "sawtooth18", "sawtooth19",
    "sawtooth20", "sawtooth21", "sawtooth22", "sawtooth23", "sawtooth24", "sawtooth25", "sawtooth26", "sawtooth27", "sawtooth28", "sawtooth29",
    "sawtooth30", "sawtooth31", "sawtooth32"];

const TriangleWithPartials =
  ["triangle1", "triangle2", "triangle3", "triangle4", "triangle5", "triangle6", "triangle7", "triangle8", "triangle9",
    "triangle10", "triangle11", "triangle12", "triangle13", "triangle14", "triangle15", "triangle16", "triangle17", "triangle18", "triangle19",
    "triangle20", "triangle21", "triangle22", "triangle23", "triangle24", "triangle25", "triangle26", "triangle27", "triangle28", "triangle29",
    "triangle30", "triangle31", "triangle32"];


const Oscilator = ({ webViewRef }: Props) => {
  const [oscilatorValue, setOscilatorValue] = useState(0);
  const [oscilatorType, setOscilatorType] = useState('triangle1');
  const AllPartials = useMemo(() => [...SineWithPartials, ...SquareWithPartials, ...SawtoothWithPartials, ...TriangleWithPartials], []);

  const startOscilator = (value: Number, type: string) => {
    webViewRef.current?.injectJavaScript(`
      osc.frequency.value=100;
      osc.type='sine2';
      osc.start();
      true;
    `);
  }
  const endOscilator = () => {
    webViewRef.current?.injectJavaScript(`
        osc.stop();true;
      `);
  }

  return (
    <View>
      <View
        style={{
          margin: margin_bg,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Courier' }}>typ3Pr3cOscilator_Module</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => { startOscilator(oscilatorValue, oscilatorType) }}
        >
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
          onPress={() => { endOscilator() }}
        >
          <Text style={styles.text}>End</Text>
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
          style={{
            backgroundColor: 'white',
            height: 50,
            width: 200,
            fontFamily: 'Courier',
            borderRadius: radius_sm
          }}
          keyboardType='numeric'
          placeholder='number_input'
          // value={}
          placeholderTextColor='black'
        // onChangeText={hzInputHandler}
        />
        <TouchableOpacity
          style={styles.submit}
        // onPress={submitHzHandler}
        >
          <Text>Change hz</Text>
        </TouchableOpacity>
        {/* <SelectDropdown
          data={AllPartials}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        /> */}
      </View>
    </View>
  );
}

export default Oscilator;