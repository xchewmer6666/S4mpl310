export const jsInjector = (pitchRes, timing, delay, play) => `
if(timeout${delay}){
  window.ReactNativeWebView.postMessage('timeout ${delay} is present');
}

playHandler${delay} = () => {
  now${delay} = Date.now();
  player${delay}.loop = true;
  // player${delay}.playbackRate = 1.5;
  player${delay}.start();
}

syncHandler${delay} = () => {
  
  if(${delay} === 1){
    currmillis${delay} = null;
    if(timeout2 && !timeout3){
      currmillis${delay} = Date.now() - (now2);
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000)
      window.ReactNativeWebView.postMessage(currmillis${delay});
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay});
    }
    else if(timeout2 && timeout3){
      if(now2 > now3){
        currmillis${delay} = Date.now() - (now2);
      }
      else if(now3 > now2){
        currmillis${delay} = Date.now() - (now3);
      }
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000);
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay}); 
    }
    else if(timeout3 && !timeout2){
      currmillis${delay} = Date.now() - (now3);
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000);
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay});  
    }
    else {
      playHandler${delay}();
    }
  }

  if(${delay} === 2){
    currmillis${delay} = null;
    if(timeout1 && !timeout3){
      currmillis${delay} = Date.now() - (now1);
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000)
      window.ReactNativeWebView.postMessage(currmillis${delay});
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay});
    }
    else if(timeout1 && timeout3){
      if(now1 > now3){
        currmillis${delay} = Date.now() - (now1);
      }
      else if(now3 > now1){
        currmillis${delay} = Date.now() - (now3);
      }
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000);
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay}); 
    }
    else if(timeout3 && !timeout1){
      currmillis${delay} = Date.now() - (now3);
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000);
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay});  
    }
    else {
      playHandler${delay}();
    }
  }

  if(${delay} === 3){
    currmillis${delay} = null;
    if(timeout1 && !timeout2){
      currmillis${delay} = Date.now() - (now1);
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000)
      window.ReactNativeWebView.postMessage(currmillis${delay});
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay});
    }
    else if(timeout1 && timeout2){
      if(now1 > now2){
        currmillis${delay} = Date.now() - (now1);
      }
      else if(now2 > now1){
        currmillis${delay} = Date.now() - (now2);
      }
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000);
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay}); 
    }
    else if(timeout2 && !timeout1){
      currmillis${delay} = Date.now() - (now2);
      currmillis${delay} = 8000 - (Math.abs(currmillis${delay}) % 8000);
      setTimeout(() => {
        playHandler${delay}();
      }, currmillis${delay});  
    }
    else {
      playHandler${delay}();
    }
  }

}

if(${play} && !timeout${delay}){
  timeout${delay} = true;

  if(!player${delay}){
    player${delay} = new Tone.Player("sample0${delay}.wav", () => {
      // playHandler${delay}();
      window.ReactNativeWebView.postMessage('playing${delay}');
      syncHandler${delay}();
    }).toDestination();
  } else {
    syncHandler${delay}();
  }

} 

else {
  millis${delay} = Date.now() - now${delay};
  // window.ReactNativeWebView.postMessage(8000 - (Math.abs(millis${delay}) % 8000));
  setTimeout(() => {
    player${delay}.stop();
    timeout${delay} = false;
  }, 8000 - (Math.abs(millis${delay}) % 8000));
}

true;
`;