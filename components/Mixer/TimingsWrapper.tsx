import { View, Text } from 'react-native';
import React from 'react';
import Timings from './Timings';
import Transpose from '../Transpose';

const TimingsWrapper = (payload: any) => {
  const {
    timing,
    instance,
    loopCount,
    setTiming,
    setInstance,
    setLoopCount,
    volume,
    setVolume,
    pitchShift,
    setPitchShift
  } = payload.payload;

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      <Timings name='timing' value={timing} setValue={setTiming} />
      <Timings name='sample' value={instance} setValue={setInstance} />
      <Timings name='loopCnt' value={loopCount} setValue={setLoopCount} />
      <Timings name='volume' value={volume} setValue={setVolume} />
      <Transpose value={pitchShift} setValue={setPitchShift} />
    </View>
  );
}

export default TimingsWrapper