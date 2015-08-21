var examples = [
  'A presentation without visuals can be boring examples',
  'but with visuals your presentation becomes exciting',
  'even a conversation with visuals can become more fun',
  'this morning I drank a cup of coffee',
  'I need coffee to get started in the morning'
];

var verbs = ['VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ'];
var properNouns = ['NNP', 'NPS'];
var nouns = ['NN', 'NNS'];
var adverbs = ['RB', 'RBR', 'RBS'];
var adjectives = ['JJ', 'JJR', 'JJS'];
var listOfTags = [verbs, properNouns, nouns, adverbs, adjectives];
var tags = R.flatten(listOfTags);

var pos = Meteor.npmRequire('pos');
var chunker = Meteor.npmRequire('pos-chunker');
var tagger = new pos.Tagger();

var parseWords = R.curry(function (x) {
  return new pos.Lexer().lex(x);
});

var tagWords = R.curry(function (x) {
  return tagger.tag(x);
});

var hasContentWords = R.curry(function(x) {
  return R.indexOf(x[1], tags) >= 0;
});

var removeShortWords = R.curry(function(x) {
  return R.filter(function(x) {
    return x[0].length > 2;
  }, x);
});

var filterContentWords = R.curry(function(x) {
  return R.filter(hasContentWords, x);
});

var tagSentence = R.compose(tagWords, parseWords);
var tagSentences = R.map(tagSentence);

var trace = R.curry(function(x, y) {
  console.log(x + y);
  return y;
});

var getContentWords = R.compose(
  R.join(' '),
  R.map(R.head),
  filterContentWords,
  removeShortWords,
  tagSentence
);

console.log(R.map(getContentWords, examples));