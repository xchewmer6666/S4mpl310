import { View } from 'react-native';
import React from 'react';
import Bpm from '../Bpm';

const Player = () => {

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}
    >
      <Bpm />
    </View>

  );
}

export default Player;