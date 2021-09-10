

var points = 0;
var attempts = 0;
var count = 0;
var timeLeft = 20;
var latin = "";

var countdown = setInterval(countDownTimer,1000);


function countDownTimer(){
   latin = vocabList[0][0];
   document.getElementById("flex1c").style.color = "red";
   document.getElementById("flex1c").innerHTML = timeleft;
   timeleft -= 1;
   if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("flex1c").innerHTML = "Finis!";
					document.getElementById("flex1c").style.color = "black";

          document.getElementById("flexA").disabled = true;
          document.getElementById("flexB").disabled = true;
          document.getElementById("flexC").disabled = true;
          document.getElementById("flexD").disabled = true;
          document.getElementById("flex1b").onclick = function(){startGame()};
          document.getElementById("flex1b").innerHTML = "Ludamus Iterum!";
          document.getElementById("flex1b").disabled = false;
          attempts++;
          count++;
          document.getElementById("flex1a").innerHTML = points  + "/" + attempts;


    if (timeleft <= 0 && document.getElementById("flexA").innerHTML == vocabList[0][1]){
            document.getElementById("flexA").style.backgroundColor = "red";
            document.getElementById("flexA").innerHTML = latin.italics() + " means: " + vocabList[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexB").innerHTML == vocabList[0][1]){
            document.getElementById("flexB").style.backgroundColor = "red";
            document.getElementById("flexB").innerHTML = latin.italics() + " means: " + vocabList[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexC").innerHTML == vocabList[0][1]){
      document.getElementById("flexC").style.backgroundColor = "red";
      document.getElementById("flexC").innerHTML = latin.italics() + " means: " + vocabList[0][1];
      }

    if(timeleft <= 0 && document.getElementById("flexD").innerHTML == vocabList[0][1]){
            document.getElementById("flexD").style.backgroundColor = "red";
            document.getElementById("flexD").innerHTML = latin.italics() + " means: " + vocabList[0][1];
      }
  }
}


//This stops the timer and resets it to 15 seconds
function stopTimer() {

  clearInterval(countdown);
  document.getElementById("flex1c").innerHTML = "Timer";
  timeleft = 20;

}

stopTimer();



function myFunc(){
  document.getElementById("flexA").innerHTML = "Wrong!";
}

//ADD VOCABLIST here! Make sure the macron is dropped from 2nd declension genitive singular!
let vocabList = [["ager, agrī, m.","field, farm"],["amīcus, amīcī, m.","friend"],["fīlius, fīliī, m.","son"],["numerus, numerī, m.","number"],["populus, populī, m.","the people, a people, a nation"],["amīca, amīcae, f.","girl friend"],["agricola, agricolae, m.","farmer"],["fēmina, fēminae, f.","woman"],["fīlia, fīliae, f.","daughter"],["sapientia, sapientiae, f.","wisdom"],["puer, puerī, m.","boy"],["vir, virī, m.","man, hero"],["avārus, avāra, avārum","greedy, avaricious"],["Rōmānus, Rōmāna, Rōmānum","Roman"],["paucī, paucae, pauca","few, a few"],["de (+ ABL.)","down from. from; concerning, about"],["in (+ ABL.)","in, on"],["hodiē","today"],["semper","always"],["habeō, habēre, habuī, habitum","to have, hold, possess; consider, regard"],["satiō, satiāre, satiāvī, satiātum","to satisfy, sate"]];


// Generic function to return a shuffled array:
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }

    return array;
  }




//This randomizes the order of the buttons
var flex = ["flexA","flexB","flexC","flexD"];
var flexIndx = Math.floor(Math.random() * flex.length);

shuffle(flex);


function reset(){


  flex = ["flexA","flexB","flexC","flexD"];
  flexIndx = Math.floor(Math.random() * flex.length);

  shuffle(flex);
  stopTimer();
  timer = 20;
  document.getElementById("flex1c").innerHTML =  "Timer"
}










shuffle(vocabList);



function startGame(){

      console.log(vocabList);
      removed = vocabList.shift();
      //console.log(vocabList);
      added = vocabList.push(removed);


  if (count == vocabList.length) {
        console.log("clearing the Set and starting over!");
        //x.clear();
        shuffle(vocabList);
        //alreadyDone = "";
        count = 0;
        points = 0;
        attempts = 0;
        document.getElementById("flex1a").innerHTML = "Points";
      }


      reset();

      countDownTimer();
      countdown = setInterval(countDownTimer,1000);

      document.getElementById("flex1b").disabled = true;

      document.getElementById("flexA").style.display = "block";
      document.getElementById("flexB").style.display = "block";
      document.getElementById("flexC").style.display = "block";
      document.getElementById("flexD").style.display = "block";

      document.getElementById("flexA").disabled = false;
      document.getElementById("flexB").disabled = false;
      document.getElementById("flexC").disabled = false;
      document.getElementById("flexD").disabled = false;

      document.getElementById("flexA").style.backgroundColor = "#008CBA";
      document.getElementById("flexB").style.backgroundColor = "#008CBA";
      document.getElementById("flexC").style.backgroundColor = "#008CBA";
      document.getElementById("flexD").style.backgroundColor = "#008CBA";

      document.getElementById("flex1b").innerHTML = vocabList[0][0];
      document.getElementById(flex[0]).innerHTML = vocabList[0][1];
      document.getElementById(flex[1]).innerHTML = vocabList[1][1];
      document.getElementById(flex[2]).innerHTML = vocabList[2][1];
      document.getElementById(flex[3]).innerHTML = vocabList[3][1];

    }





function answerFlexA(){

  if (document.getElementById("flexA").innerHTML == vocabList[0][1]){

    var latin = vocabList[0][0];
    document.getElementById("flexA").innerHTML = "Bene!!! " + latin.italics() + " means: " + vocabList[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "green";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    count++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexA").style.backgroundColor = "red"
  document.getElementById("flexA").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;

  }
}

function answerFlexB(){

  if (document.getElementById("flexB").innerHTML == vocabList[0][1]){


    var latin = vocabList[0][0];
    document.getElementById("flexB").innerHTML = "Optime!!! " + latin.italics() + " means: " + vocabList[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "green";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    count++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexB").style.backgroundColor = "red"
  document.getElementById("flexB").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexC(){

  if (document.getElementById("flexC").innerHTML == vocabList[0][1]){

    var latin = vocabList[0][0];
    document.getElementById("flexC").innerHTML = "Bene!!! " + latin.italics() + " means: " + vocabList[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "green";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    count++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexC").style.backgroundColor = "red"
  document.getElementById("flexC").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexD(){

  if (document.getElementById("flexD").innerHTML == vocabList[0][1]){

    var latin = vocabList[0][0];
    document.getElementById("flexD").innerHTML = "Optime!!! " + latin.italics() + " means: " + vocabList[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "green";
    points++;
    count++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();
  } else {

  document.getElementById("flexD").style.backgroundColor = "red"
  document.getElementById("flexD").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}
