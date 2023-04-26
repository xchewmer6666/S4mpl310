export const attack = (webViewRef, hzInput) => {
  webViewRef.current?.injectJavaScript(`
        synth.triggerAttack("${hzInput}");true;
      `);
};

export const release = (webViewRef, prevHzInput) => {
  webViewRef.current?.injectJavaScript(`
        synth.triggerRelease("${prevHzInput}");true;
      `);
};