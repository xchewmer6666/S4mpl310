
export const jsInjector = (pitchRes, timing, instance, play, name, volume, pitchShift) => {
  const nins = `${name}${instance}`;
  return `
    if(${pitchShift} && state.players['player${nins}']){
      pitchShift${nins} = new Tone.PitchShift(${pitchShift}).toDestination();
      state.players['player${nins}'].fan(pitchShift${nins});
    }

    if(state.timeouts['timeout${nins}']){
      window.ReactNativeWebView.postMessage('timeout ${nins} is present');
    }

    if(${play} && state.players['player${nins}']){
      state.players['player${nins}'].playbackRate = ${timing};
    }

    if(state.players['player${nins}'] && ${volume} !== 1){
      state.players['player${nins}'].volume.value = ${volume};
    }

    playHandler${nins} = () => {
      state.nows['now${nins}'] = Date.now();
      state.players['player${nins}'].loop = true;
      if(parseInt(${timing}) !== 1){
        state.players['player${nins}'].playbackRate = ${timing};
      }
      state.players['player${nins}'].start();
    }

    syncHandler${nins} = () => {
      currmillis${nins} = null;
      currDelays${nins} = [];

      for(i${nins} = 0; i${nins} < 10; i${nins}++){
        for (j${nins} = 1; j${nins} < 4; j${nins}++) {
          timeoutName${nins} = \`timeout\$\{i${nins}\}\$\{j${nins}\}\`;
          if(
            !(timeoutName${nins} === 'timeout${nins}') &&
            state.timeouts[timeoutName${nins}]
          ){
            window.ReactNativeWebView.postMessage('yek');
            window.ReactNativeWebView.postMessage(state.nows[\`now\$\{i${nins}\}\$\{j${nins}\}\`]);
            currDelays${nins}.push({
              name: timeoutName${nins} ,
              value: \`now\$\{i${nins}\}\$\{j${nins}\}\`,
            });
          }

        }
      }
      
      if(currDelays${nins}.length === 1) {
        delay${nins} = currDelays${nins}[0].value;

        window.ReactNativeWebView.postMessage('do');
        window.ReactNativeWebView.postMessage(delay${nins});
        currmillis${nins} = Date.now() - state.nows[delay${nins}];
        currmillis${nins} = (8000 ) - (Math.abs(currmillis${nins})) % (8000 );
        setTimeout(() => {
          playHandler${nins}();
          return;
        }, currmillis${nins});
        return ;
      }
      
      if(currDelays${nins}.length > 1){
        max${nins} = {name: 0, value: 0};

        currDelays${nins}.map((ay${nins}) => {
          max${nins} = state.nows[ay${nins}.value];

          if(state.nows[ay${nins}.value] > max${nins}.value){
            max${nins} = state.nows[ay${nins}.value];
          }
        });

        delay${nins} = max${nins};
        window.ReactNativeWebView.postMessage('map');
        window.ReactNativeWebView.postMessage(delay${nins});
        currmillis${nins} = Date.now() - delay${nins};
        currmillis${nins} = (8000 ) - (Math.abs(currmillis${nins})) % (8000 );
        window.ReactNativeWebView.postMessage(currmillis${nins});
        setTimeout(() => {
          playHandler${nins}();
          return;
        }, currmillis${nins});
        return;
      }

      else {
        playHandler${nins}();
      }
    } // end syncHandler

    if(${play} && !state.timeouts['timeout${nins}']){
      state.timeouts['timeout${nins}'] = true;

      if(!state.players['player${nins}']){
        state.players['player${nins}'] = new Tone.Player("sample0${(instance % 3 == 0 ? 3 : instance % 3)}.wav", () => {
          // playHandler${instance}();
          // window.ReactNativeWebView.postMessage('playing${instance}');
          syncHandler${nins}();
        }).toDestination();
      } 
      
      else {
        syncHandler${nins}();
      }

    } 

    else {
      millis${nins} = Date.now() - state.nows['now${nins}'];
      // window.ReactNativeWebView.postMessage(8000 - (Math.abs(millis${nins}) % 8000));
      setTimeout(() => {
        state.players['player${nins}'].stop();
        state.timeouts['timeout${nins}'] = false;
      }, 8000 - (Math.abs(millis${nins}) % 8000));
    }

    true;
`};

