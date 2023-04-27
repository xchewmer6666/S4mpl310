import { View, Text } from 'react-native';
import React from 'react';
import Timings from './Timings';

interface Props {
  timing: string;
  delay: string;
  loopCount: string;
  setTiming: React.Dispatch<React.SetStateAction<string>>;
  setDelay: React.Dispatch<React.SetStateAction<string>>;
  setLoopCount: React.Dispatch<React.SetStateAction<string>>;
}

const TimingsWrapper = (payload: any) => {
  const {
    timing,
    delay,
    loopCount,
    setTiming,
    setDelay,
    setLoopCount,
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
      <Timings name='delay' value={delay} setValue={setDelay} />
      <Timings name='loopCnt' value={loopCount} setValue={setLoopCount} />
    </View>
  );
}

export default TimingsWrapper