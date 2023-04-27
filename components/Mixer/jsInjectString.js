export const jsInjector = (pitchRes, timing, delay, play) => `
      playHandler${delay} = () => {
        now${delay} = Date.now();
        player${delay}.loop = true;
        // player${delay}.playbackRate = 1.5;
        player${delay}.start();
      }
      if(timeout${delay}){
        window.ReactNativeWebView.postMessage('denied${delay}');
      }
      if(${play} && !timeout${delay}){
        if(!player${delay}){
          player${delay} = new Tone.Player("sample0${delay}.wav",()=>{
            playHandler${delay}();
          }).toDestination();
        }else{
          playHandler${delay}();
        }
        

        // if(${delay} == 1){
          //   if(timeout2 || timeout3){
          //     setTimeout(()=>{
          //       playHandler${delay}();
          //     },);
          //   }
          // }
          // if(${delay} == 2){
          //   if(timeout1 || timeout3){
          //     setTimeout(()=>{
          //       playHandler${delay}();
          //     },);
          //   }
          // }
          // if(${delay} == 3){
          //   if(timeout1 || timeout2){
          //     setTimeout(()=>{
          //       playHandler${delay}();
          //     },);
          //   } 
          // }
          // else{
          // }

      } else {
        timeout${delay} = true;
        millis${delay} = Date.now() - now${delay};
        // window.ReactNativeWebView.postMessage(8000-(Math.abs(millis${delay})%8000));
        setTimeout(()=>{
          player${delay}.stop();
          timeout${delay} = false;
        },8000-(Math.abs(millis${delay})%8000));
      }
    true;
    `;
const jsInjectorBak = (pitchRes, timing, delay) => `
    notes = [
      { pitch: "", timing: 1 },
      { pitch: "", timing: 2 },
      { pitch: "", timing: 0.5 },
      { pitch: "", timing: 0.2 },
    ];
    sampler = new Tone.Sampler({
      urls: {
        A1: "hu.wav",
      },
      baseUrl: "assets/",
      onload: () => {
        // sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.1);
        let delay = Tone.now();

        for(let i = 0; i < notes.length; i++) {
          delay += notes[i].timing;
          sampler.triggerAttackRelease("A1", 1, delay);
        }
      }
    }).toDestination();true;
    `;