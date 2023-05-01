import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setGlobalBpm } from './bpmSlice';
import { radius_sm } from '../../constants';

const Bpm = () => {
  const [value, setValue] = useState('');
  const globalBpm = useSelector((state: any) => state.bpm.bpm);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(globalBpm);
  }, [globalBpm]);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
      }}
    >
      <TextInput
        value={value}
        keyboardType='numeric'
        onChangeText={(text) => {
          setValue(text);
        }}
        style={{
          backgroundColor: 'silver',
          height: 40,
          width: 80,
          paddingLeft: 5,
          marginRight: 20,
        }}
        placeholder={`bpm:`}
        placeholderTextColor='black'
      />
      <TouchableOpacity
        onPress={() => { dispatch(setGlobalBpm(value)) }}
        style={{
          backgroundColor: 'yellow',
          width: 60,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: radius_sm
        }}
      >
        <Text style={{ color: 'black', fontFamily: 'Courier' }}>change</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Bpm;

const styles = StyleSheet.create({});