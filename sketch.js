let myOutput;
let vid, vid0, vid1, vid2;
let x, y, r;
let numKeys, attack;
let start = true;
let selected;
let i = -1;
let button, midiSelect;

function setup() {
  button = createButton("start");
  button.position(300, 100);
  midiSelect = createSelect();
  midiSelect.position(100, 100);
  selected = midiSelect.selected();

  button.mousePressed(() => {
    selected = midiSelect.selected();
    myOutput = WebMidi.outputs[selected];
    console.log("midi port = " + myOutput.name);
    midiSelect.hide();
    button.hide();
    clear();
    vid3.play();
    let note = map(mouseY, 0, height, 1, 108);
    myOutput.playNote(note, 1, { duration: 1000, rawAttack: 100 });

    if (start) {
      myOutput.playNote(4, 1, { duration: 9800, rawAttack: 100 });
      myOutput.playNote(2, 1, { duration: 6730, rawAttack: 100 });
      myOutput.playNote(0, 1, { duration: 6700, rawAttack: 100 });
      start = false;
    }
  });

  createCanvas(windowWidth, windowHeight);
  numKeys = 108 / 4;
  attack = height / 8;
  vid3 = createVideo("assets/slacker04r.webm");
  vid3.speed(0.5);
  vid3.hide();

  addCues();

  WebMidi.enable()
    .then(onEnabled)
    .catch((err) => alert(err));

  x = width / numKeys;
  y = height / attack;
  noStroke();
}

function onEnabled() {
  console.log("WebMIDI Enabled");
  // Inputs/Outputs
  WebMidi.inputs.forEach((input) =>
    console.log("Input: ", input.manufacturer, input.name)
  );
  WebMidi.outputs.forEach((output) => midiSelect.option(output.name, i), i++);
  selected = midiSelect.selected();
  myOutput = WebMidi.outputs[selected];
  console.log("midi port = " + myOutput.name);
}

function draw() {
  if (start) {
    background(0);
  } else {
    fill(255, 13);
    rect(0, 0, width, height / 5 + random(-3, 3));
    image(vid3, 0, 0, width, height);
  }
}

function addCues() {
  //first step
  vid3.addCue(1, step0, 0);
  vid3.addCue(1.5, step01, 0);
  vid3.addCue(2, step02, 0);
  //second step
  vid3.addCue(5.46, step1, 0);
  vid3.addCue(6.25, step11, 0);
  vid3.addCue(9.45, step12, 0);
  //third step
  vid3.addCue(10.9, step2, 0);
  vid3.addCue(11.15, step21, 0);
  vid3.addCue(12.25, step22, 0);
  //fourth step
  vid3.addCue(15.2, step0, 29);
  vid3.addCue(15.7, step01, 29);
  vid3.addCue(16.2, step02, 29);
  //fifth step
  vid3.addCue(21.2, step1, 29);
  vid3.addCue(21.45, step11, 29);
  vid3.addCue(24.15, step12, 29);
  // //sixth step
  vid3.addCue(25.45, step2, 29);
  vid3.addCue(25.6, step21, 29);
  vid3.addCue(25.5, step6, 29);
  //seventh step
  vid3.addCue(30.75, step0, 60);
  vid3.addCue(31.25, step01, 60);
  vid3.addCue(31.75, step02, 60);
  //eighth step
  vid3.addCue(35.46, step1, 60);
  vid3.addCue(37.25, step11, 60);
  vid3.addCue(39.45, step12, 60);
  //ninth
  vid3.addCue(40.9, step2, 60);
  vid3.addCue(41.15, step21, 60);
  vid3.addCue(42.25, step22, 60);
  //tenth
  vid3.addCue(45.25, step0, 89);
  vid3.addCue(45.75, step01, 89);
  vid3.addCue(46.25, step02, 89);
  //elevent
  vid3.addCue(51.25, step1, 89);
  vid3.addCue(52, step11, 89);
  vid3.addCue(54.5, step12, 89);
  //twelth
  vid3.addCue(55.25, laststep0, 0);
}

// first step
function step0(t) {
  console.log("step1: " + t);
  myOutput.playNote(14 + t, 1, { duration: 19000, rawAttack: 127 });
}

function step01(t) {
  myOutput.playNote(12 + t, 1, { duration: 17800, rawAttack: 100 });
}

function step02(t) {
  myOutput.playNote(11 + t, 1, { duration: 16200, rawAttack: 100 });
  myOutput.playNote(9 + t, 1, { duration: 16000, rawAttack: 100 });
}

// second step
function step1(t) {
  console.log("step2: " + t);
  myOutput.playNote(24 + t, 1, { duration: 18510, rawAttack: 50 });
  myOutput.playNote(23 + t, 1, { duration: 18200, rawAttack: 50 });
}

function step11(t) {
  myOutput.playNote(19 + t, 1, { duration: 1012, rawAttack: 75 });
}

function step12(t) {
  myOutput.playNote(21 + t, 1, { duration: 9500, rawAttack: 100 });
  myOutput.playNote(19 + t, 1, { duration: 8500, rawAttack: 100 });
}

//third step
function step2(t) {
  console.log("step3 " + t);
  myOutput.playNote(35 + t, 1, { duration: 19000, rawAttack: 50 });
}

function step21(t) {
  myOutput.playNote(33 + t, 1, { duration: 1010, rawAttack: 75 });
}
function step22(t) {
  myOutput.playNote(31 + t, 1, { duration: 16100, rawAttack: 100 });
  myOutput.playNote(33 + t, 1, { duration: 16300, rawAttack: 100 });
  myOutput.playNote(29 + t, 1, { duration: 15900, rawAttack: 25 });
}
//sixth step
function step6(t) {
  myOutput.playNote(31 + t, 1, { duration: 16000, rawAttack: 100 });
  myOutput.playNote(33 + t, 1, { duration: 16100, rawAttack: 100 });
  myOutput.playNote(30 + t, 1, { duration: 15900, rawAttack: 25 });
}

//last step
function laststep0(t) {
  console.log("last step");
  myOutput.playNote(124, 1, { duration: 19000, rawAttack: 50 });
  myOutput.playNote(120, 1, { duration: 16100, rawAttack: 100 });
  myOutput.playNote(122, 1, { duration: 16300, rawAttack: 100 });
  myOutput.playNote(119, 1, { duration: 15900, rawAttack: 25 });
}
