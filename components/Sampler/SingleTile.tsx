import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { margin_md, margin_sm, radius_sm, width } from '../../constants'
import Mixer from '../Mixer'

const SingleTile = ({ webViewRef, ind }: any) => {
  const [played, setPlayed] = useState(false);
  const animation = useRef(new Animated.Value(0));

  useEffect(() => {
    if (played) {
      Animated.loop(
        Animated.timing(animation.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        })
      ).start();
    }
  }, [played]);

  const bgStyle = {
    backgroundColor: animation.current.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(255,0,0, 1)", "rgba(0,0,255, 0)"],
    }),
  };

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <View>
        <View
          style={{
            borderColor: 'black',
            borderTopWidth: 0.6,
            borderBottomWidth: 0.6,
            borderLeftWidth: 6,
            marginVertical: 6,
            marginLeft: 6,
            justifyContent: 'center',
            backgroundColor: 'silver',
            shadowColor: '#000',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 20,
            elevation: 8,
            height: 55
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              width: width / 1.45,
              height: 53,
            }}
            onPress={() => {
              setPlayed(st => !st);
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  backgroundColor: '#FF793B',
                  height: 53,
                  width: 60,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 8,
                  justifyContent: 'center',
                }}
              >
                <Text style={{
                  marginLeft: margin_md,
                  fontSize: 13,
                }}>
                  {`key${ind}`}
                </Text>
              </View>
              <Animated.View
                style={[{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 10,
                  width: 7,
                  height: 7,
                  marginRight: 10,
                  marginLeft: 10,
                }, played ? bgStyle : null]}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderTopWidth: 0.25,
            width: 255,
            alignSelf: 'center',
            marginTop: -4,
            opacity: 0.4
          }}
        >
        </View>

      </View>
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