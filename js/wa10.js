const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = ":insertx: decided, spontaneously, as if compelled by unknown forces, to visit :inserty:. Upon :insertx:'s arrival, they encountered a distraught child by the name of Bob, who desparately implored :insertx: to please, perform this one task and the apocalypse will be delayed another thousand years. 'What do I have to do?' :insertx: asked. ':insertz:'"
 

//"It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["A polar bear wearing a winter outfit ironically", "Vicki Gunvalson", "Muffy the goth sheep from animal crossing"];
const insertY = ["Domino's Pizza", "an incomprehensively expansive labyrinth", "the Chesapeake Bay"];
const insertZ = ["Hand sew a tailored suit jacket for every native bird in your county.", "Reach 1,000 followers on instagram.", "Cause a scene at the Denver gem and mineral expo and prevent the distribution of serpentene."];


randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);


function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    newStory = newStory.replace("pounds","stone")
    const temperature =  Math.round((94-32)*(5/9)) + "centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature)

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

console.log(zItem);

