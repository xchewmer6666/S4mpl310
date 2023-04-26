import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
  octKeys: { name: string; using: boolean; color: string; }[];
  pitchRes: { [key: string]: any };
  setPitchRes: React.Dispatch<any>;
}

const KeyPicker = ({ octKeys, pitchRes, setPitchRes }: Props) => {
  return (
    <View
      style={{
        height: 200,
        justifyContent: 'center',
      }}
    >
      <Text style={{ width: '100%', height: 40 }}>select keys for pitch:</Text>
      <ScrollView
        style={{
          height: 100,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {
            octKeys.map((i) => {
              return pitchRes[i.name] ?
                <TouchableOpacity
                  key={`${i.name}_picked`}
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: i.color,
                    marginRight: 2,
                    marginBottom: 6,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onPress={() => setPitchRes(() => {
                    let obj: any = { ...pitchRes };
                    obj[i.name] = !obj[i.name];
                    return obj;
                  })}
                >
                  <Text>{i.name}</Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'red',
                      width: '140%',
                      transform: [
                        {
                          rotateZ: '45deg'
                        }
                      ],
                      position: 'absolute'
                    }}
                  ></View>
                </TouchableOpacity> :
                (
                  <TouchableOpacity
                    key={`${i.name}_unpicked`}
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: i.color,
                      marginRight: 2,
                      marginBottom: 6,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    onPress={() => setPitchRes(() => {
                      let obj: any = { ...pitchRes };
                      if (obj[i.name]) {
                        obj[i.name] = !obj[i.name];
                        return obj;
                      } else {
                        obj[i.name] = true;
                        return obj;
                      }
                    })}
                  >
                    <Text>{i.name}</Text>
                  </TouchableOpacity>
                );
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default KeyPicker

const styles = StyleSheet.create({})