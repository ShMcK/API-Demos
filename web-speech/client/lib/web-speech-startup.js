recognition.onstart = function() {
  // listening started
  // light on
};

recognition.onend = function() {
  // light off
  // start recognizer again
};

recognition.onresult = function(event) { //the event holds the results
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