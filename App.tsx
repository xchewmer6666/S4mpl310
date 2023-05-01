import { TouchableOpacity, Platform, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React, { useRef, useEffect } from 'react';

import { WebView } from 'react-native-webview';

import { injectLoadJs } from './injectLoadJs.js';
import Builder from './pages/Builder/index';
import { Provider } from 'react-redux';
import { store } from './app/store.js';


const App = () => {
  const webViewRef = useRef<WebView>(null);


  const onMessage = (event: any) => {
    console.log(event.nativeEvent.data);
  }

  useEffect(() => {
  }, []);

  // const baseUrl = Platform.OS === 'ios'
  //   ? 'Resources/'
  //   : 'assets/custom/'



  return (
    <Provider store={store}>
      <SafeAreaView>
        <WebView
          source={require('./webview.html')}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          ref={webViewRef}
          onMessage={(event) => onMessage(event)}
          originWhitelist={["*"]}
        />
        <Builder webViewRef={webViewRef} />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({

});