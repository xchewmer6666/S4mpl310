export const jsInjector = (pitchRes, timing, delay, loopCount) => `
    sampler = new Tone.Sampler({
      urls: {
        A1: "hu.wav",
      },
      baseUrl: "assets/",
      onload: () => {
        // sampler.triggerAttackRelease(, 0.1);
        let delay = Tone.now();

        for(let i = 0; i < ${loopCount}; i++) {
          if(i>0)delay += ${timing}+${delay};
          else delay+=${delay}
          sampler.triggerAttackRelease(${pitchRes}, ${timing}, delay);
        }
      }
    }).toDestination();true;
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