let canvas;
let adjust;


const instructions = [
  " act like you don't want to be here",
  " act like you're interested in what someone else is doing",
  " act like you want to be here but don't know what to do",
  " make it known to everyone else that you don't want to be here",
  " pretend that you know what you are doing here",
  " act like you're important",
  " act like you want something from someone else"
];


// Instructions on how to look

// Maybe separate into 3 Classes: PRIESTS, PROFESSIONALS, NPCS
// Priests = engage the Jester
// Professionals = active interaction
// NPCS = repeat same simple actions over and over

// when with someone
// when alone
// but always want to

const priestMove = [

];

const priest = [];
const profs = [];

const npcMove = [
  "constantly offer a handshake to someone",
  "look at your phone as often as possible",
  "pretend to laugh at a joke,"


];


const npcs = [];

const see = [
  "avoid all eye contact",
  "try to make eye contact ",
  "look at your phone as often as possible",
  "look at the jester as often as possible",
  "look at the walls",

];

// Instructions for how to move
const move = [
  "move as far away as possible from everyone else ",
  "move to where the most people are",
  "move away when someone comes close to you",

];

// Instructions for how to be
const be = [
  "copy the actions of the jester as often as possible",
  "do the opposite of the jester as often as possible",
  "pray to the jester",
  "copy the actions of the person furtherst away from you",
  ""

];

const instruction = [
  "act like you don't want to be here",
  "act like you're interested in what someone else is doing",
  "act like you want to be here but don't know what to do",
  "make it known to everyone else that you don't want to be here",
  "pretend that you know what you are doing here",
  "act like you're important",
  "act like you want something from someone else"
];

// const instruction2 = [
//   "try to network with other people",
//   "critique the artworks around you as if you could do better",
//   "act like you want to be here but don't know what to do",
//   "make it known that you hate art",
//   "pretend that you understand art even though you don't",
//   "act like you're an important guest of honour",
//   "act like you want to network but feel as if you are not good enough"
// ];


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");

  adjust = windowWidth / 10;

  background(255);


  push();
  translate(width / 2, height / 2);
  fill(0);

  textWrap(WORD);

  textAlign(CENTER);
  textSize(adjust);

  // text("you are at an art networking event", -windowWidth/4, -windowHeight/4, windowWidth/2);

  // text("by only saying the word 'art', " + random(instruction2), -windowWidth/4, windowHeight/4, windowWidth/2);


  // text("without speaking, " + random(instruction), -windowWidth/4, -windowHeight/4, windowWidth/2);
  text("without speaking, " + random(instruction), -width/4, -0, width/2);



  pop();
}