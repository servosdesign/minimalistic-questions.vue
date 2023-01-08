let questionManagementMethods = {
  /* Fisher–Yates shuffle */
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },

  randomizeData(
    questionBank,
    randomizedQuestionBank,
    randomizedOptionBank,
    questionAmount
  ) {
    /* Questions */
    for (let i = 0; i < questionBank.length; i++) {
      randomizedQuestionBank.push(questionBank[i]);
      this.shuffle(randomizedQuestionBank);
    }
    randomizedQuestionBank = randomizedQuestionBank.slice(0, questionAmount);

    /* Options */
    for (let i = 0; i < randomizedQuestionBank.length; i++) {
      randomizedOptionBank.push(randomizedQuestionBank[i].options);
      this.shuffle(randomizedOptionBank[i]);
    }
  },
};

export default questionManagementMethods;
