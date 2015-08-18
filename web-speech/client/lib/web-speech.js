if (!('webkitSpeechRecognition' in window)) {
  //Speech API not supported here…
} else { //Let’s do some cool stuff :)
  var recognition = new webkitSpeechRecognition(); //That is the object that will manage our whole recognition process.
  recognition.continuous = true;   //Suitable for dictation.
  recognition.interimResults = true;  //If we want to start receiving results even if they are not final.
  //Define some more additional parameters for the recognition:
  recognition.lang = "en-US";
  recognition.maxAlternatives = 1; //Since from our experience, the highest result is really the best...
}