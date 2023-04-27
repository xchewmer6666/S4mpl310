import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { margin_bg, margin_sm, width } from '../../constants';
import WebView from 'react-native-webview';
import Player from './Player';
import Mixer from '../Mixer';
import SingleTile from './SingleTile';

interface Props {
  webViewRef: React.RefObject<WebView<{}>>
}

const Tiles = ({ webViewRef }: Props) => {
  const [play, setPlay] = useState(false);

  return (
    <View>
      <Player />
      <ScrollView
        style={{
          width: width / 1.1,
          height: 500,
          backgroundColor: 'silver',
          margin: margin_bg,
        }}
      >
        {
          Array.from(Array(20)).map((i, ind) => {
            return (
              <View
                key={`i${ind}`}
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'black',
                  flexDirection: 'row',
                  height: 60,
                }}
              >
                <SingleTile
                  webViewRef={webViewRef}
                  ind={ind}
                />
              </View>
            );
          })
        }

      </ScrollView >
    </View >
  );
}

export default Tiles;