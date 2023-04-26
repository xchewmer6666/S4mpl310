import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { radius_md, radius_sm } from '../../constants';

interface Props {
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Player = ({ play, setPlay }: Props) => {

  const playHandler = () => {
    setPlay(!play);
  }

  return (
    <TouchableOpacity
      onPress={playHandler}
      style={{
        width: 100,
        height: 50,
        backgroundColor: '#16FF00',
        borderRadius: radius_sm,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40
      }}
    >
      <Text
        style={{
          color: 'black',
          fontFamily: 'Courier',
          fontSize: 17,
        }}
      >{
          play ?
            'Stop' :
            'Play'
        }</Text>
    </TouchableOpacity>

  );
}

export default Player;