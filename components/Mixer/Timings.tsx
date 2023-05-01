import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Timings = ({
  name,
  value,
  setValue
}: Props) => {
  const inputRef = useRef<TextInput>(null);
  const globalBpm = useSelector((state: any) => state.bpm.bpm);
  const globalTiming = useSelector((state: any) => state.modalMixer.globalTiming);

  return (
    <View
      style={{
        width: '50%',
      }}
    >
      <Text style={{ width: '100%', height: 30, marginTop: 20 }}>select {name}:</Text>
      <Text style={{ width: '100%', height: 30, marginTop: -10 }}>from 0.0</Text>
      <Text style={{ width: '100%', height: 30, marginTop: -10 }}>value: {value}</Text>
      <TextInput
        value={value}
        keyboardType={
          name === 'volume' ?
            'default' :
            'numeric'
        }
        onChangeText={(text) => {
          if (text.split('.')[0].length > 3) {
            inputRef.current?.blur();
            return;
          }
          // if (globalTiming == 2 && parseFloat(text) < 2) {
          //   setValue(`${globalTiming}`);
          //   return;
          // }
          // if (
          //   text &&
          //   name === 'timing' &&
          // !(parseFloat(text) % globalTiming == 0) &&
          // !(parseFloat(text) <= globalTiming) &&
          //   text !== '.'
          // ) {

          //   setValue(`${globalTiming}`);
          // }
          else {
            setValue(text);
          }
        }}
        style={{
          backgroundColor: 'silver',
          height: 40,
          paddingLeft: 5,
          marginRight: 20,
        }}
        placeholder={`${name}:`}
        placeholderTextColor='black'
        ref={inputRef}
      />
    </View>
  )
}

export default Timings

const styles = StyleSheet.create({})