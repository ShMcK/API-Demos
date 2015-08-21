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

Template.speechRecorder.created = function () {
  Session.set('recording', false);
  Session.set('speechToText', '');
  Session.set('interimSpeechToText', '');
};

Template.speechRecorder.helpers({
  'micImage': function () {
    if (Session.get('recording')) {
      return 'https://speechlogger.appspot.com/images/micslash2.png';
    } else {
      return 'https://speechlogger.appspot.com/images/micoff2.png';
    }
  },
  'speechToText': function () {
    return Session.get('speechToText');
  },
  'interimSpeechToText': function () {
    return Session.get('interimSpeechToText');
  }
});

Template.speechRecorder.events({
  'click .speech-recorder': function (event) {
    if (Session.get('recording')) {
      recognition.onend();
    } else {
      recognition.start();
    }
  }
});


/**
 * Speech Recognition Callbacks
 */

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
      Session.set('speechToText', event.results[i][0].transcript);
    } else {   //i.e. interim...
      console.log("interim results: " + event.results[i][0].transcript);  //You can use these results to give the user near real time experience.
      Session.set('interimSpeechToText', event.results[i][0].transcript);
    }
  }
};

recognition.onstart = function () {
  console.log('recognition onstart');
  Session.set('recording', true);
  Session.set('speechToText', '');
  Session.set('interimSpeechToText', '');
};

recognition.onend = function () {
  console.log('recognition onend');
  Session.set('recording', false);
  // start recognizer again
};

recognition.onspeechstart = function () {
  console.log('recognition onspeechstart');
};

recognition.onspeechend = function () {
  console.log('recognition onspeechend');
};

recognition.onnomatch = function (event) {
  console.log('recognition onnomatch + event');
};

recognition.onerror = function (event) {
  console.log('recognition onerror + event');
};