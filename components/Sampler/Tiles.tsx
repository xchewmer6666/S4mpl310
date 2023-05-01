import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { height, margin_bg, margin_sm, width } from '../../constants';
import WebView from 'react-native-webview';
import Player from './Player';
import Mixer from '../Mixer';
import SingleTile from './SingleTile';

interface Props {
  webViewRef: React.RefObject<WebView<{}>>
}

const Tiles = ({ webViewRef }: Props) => {
  // const [play, setPlay] = useState(false);

  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <View
        style={{
          height: height - 100
        }}
      >
        <ScrollView
          style={{
            width: width / 1.1,
            backgroundColor: 'silver',
            margin: margin_bg,
            height: height - 300,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              height: 200
            }}
          >
            <Text
              style={{
                fontSize: 30
              }}
            >
              SAMPL3100
            </Text>
          </View>
          <Player />
          {
            Array.from(Array(10)).map((i, ind) => {
              return (
                <View
                  key={`i${ind}`}
                  style={{
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
      </View>
    </View >
  );
}

export default Tiles;