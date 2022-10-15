var Sentencer = require("sentencer");

// returns something like "This sentence has a bat and a finless cinema in it."
const createASentence = function () {
  let sentance = Sentencer.make(
    "This post has been created by a library called sentencer (node js) with a noun: ({{ a_noun }}) and an adjective ({{ an_adjective }}) {{ noun }} in it."
  );
  console.log(`Sentance - ${sentance}`);

  return sentance;
};

module.exports = { createASentence };
