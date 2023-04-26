import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { margin_bg, width } from '../../constants';
import ModalMixer from '../ModalMixer';
import WebView from 'react-native-webview';
import Player from './Player';

interface Props {
  webViewRef: React.RefObject<WebView<{}>>
}

const Tiles = ({ webViewRef }: Props) => {
  const [play, setPlay] = useState(false);

  return (
    <View>
      <Player play={play} setPlay={setPlay} />
      <ScrollView
        style={{
          width: width - 40,
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
                  height: 100
                }}
              >
                <ScrollView
                  horizontal
                >
                  {
                    Array.from(Array(10)).map((j, ind2) => {
                      return (
                        <ModalMixer
                          key={`key${ind}${ind2}`}
                          keyName={`key${ind}${ind2}`}
                          webViewRef={webViewRef}
                          play={play}
                        />
                      );
                    })
                  }
                </ScrollView>
              </View>
            );
          })
        }

      </ScrollView >
    </View>
  );
}

export default Tiles;