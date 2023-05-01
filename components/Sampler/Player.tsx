import { View } from 'react-native';
import React from 'react';
import Bpm from '../Bpm';
import Transpose from '../Transpose';

const Player = () => {

  return (
    <View
      style={{
        justifyContent: 'space-between',
        backgroundColor: 'silver'
      }}
    >
      <Bpm />
    </View>

  );
}

export default Player;