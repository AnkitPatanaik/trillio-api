var col = 1; //keeps track of what col to play 
var limit = 8;

//array of all 8 sounds, sound will correspond with row
sounds = [
        'Clap (2).mp3',
        'Kick 1.mp3',
        'Kick 4.mp3',
        'Perc 1.mp3',
        'Perc 5.mp3',
        'Snare.mp3',
        'Vox (1).mp3',
        'Vox (5).mp3',
]

var prefix = '../audio/Samples1/'

//plays 1 sound
function playSound(row) {
  var soundFile = prefix + sounds[row];

  var sound = new Howl({
      src: [soundFile]
  });
  sound.play();
} 

//plays an entire column, called by setInterval
function playColumn() {
    for (var sound = 0; sound < h; sound++) {
      if (state[sound][col] == true) {
        playSound(sound);
      }
    }
    col++; // shift 'beat tracker' to next beat
    if (col == limit) col = 0; //reset beat tracker if end of board 
    console.log('play column');
}

