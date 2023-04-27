import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { margin_sm, width } from '../../constants'
import Mixer from '../Mixer'

const SingleTile = ({ webViewRef, ind }: any) => {
  const [played, setPlayed] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          width: width / 1.4
        }}
        onPress={() => {
          setPlayed(st => !st);
        }}
      >
        <Text style={{ marginLeft: margin_sm }}>{`key${ind}`}</Text>
      </TouchableOpacity>
      <Mixer
        key={`key${ind}`}
        keyName={`key${ind}`}
        webViewRef={webViewRef}
        played={played}
      />
    </View>
  )
}

export default SingleTile;