import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PolySynth from '../../components/PolySynth';
import WebView from 'react-native-webview';
import Oscilator from '../../components/Oscilator';
import Sampler from '../../components/Sampler';

interface Props {
  webViewRef: React.RefObject<WebView<{}>>
}

const BuilderPage = ({ webViewRef }: Props) => {
  return (
    <ScrollView>
      <PolySynth webViewRef={webViewRef} />
      <Oscilator webViewRef={webViewRef} />
      <Sampler webViewRef={webViewRef} />
    </ScrollView>
  );
}

export default BuilderPage;

const styles = StyleSheet.create({});