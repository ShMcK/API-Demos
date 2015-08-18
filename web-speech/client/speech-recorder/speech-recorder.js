if (!('webkitSpeechRecognition' in window)) {
  //Speech API not supported here…
} else { //Let’s do some cool stuff :)
  var recognition = new webkitSpeechRecognition(); //That is the object that will manage our whole recognition process.
  console.log(recognition);
  recognition.continuous = true;   //Suitable for dictation.
  recognition.interimResults = true;  //If we want to start receiving results even if they are not final.
  //Define some more additional parameters for the recognition:
  recognition.lang = "en-US";
  recognition.maxAlternatives = 1; //Since from our experience, the highest result is really the best...
}

recognition.onresult = function (event) { //the event holds the results
  // error
  if (typeof(event.results) === 'undefined') {
    recognition.stop();
    return;
  }
  // result
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) { //Final results
      console.log("final results: " + event.results[i][0].transcript);   //Of course – here is the place to do useful things with the results.
    } else {   //i.e. interim...
      console.log("interim results: " + event.results[i][0].transcript);  //You can use these results to give the user near real time experience.
    }
  }
};

recognition.onstart = function() {
  Template.speechRecorder.set('recording', true);
};

recognition.onend = function() {
  Template.speechRecorder.set('recording', false);
  // start recognizer again
};

Template.speechRecorder.created = function () {
  this.state = new ReactiveDict();
  this.state.set('recording', false)
};

Template.speechRecorder.helpers({
  'micImage': function () {
    if (Template.instance().state.get('recording')) {
      return 'https://speechlogger.appspot.com/images/micslash2.png';
    } else {
      return 'https://speechlogger.appspot.com/images/micoff2.png';
    }
  }
});

Template.speechRecorder.events({
  '.speech-recorder click': function (event) {
    recognition.start();
  }
});