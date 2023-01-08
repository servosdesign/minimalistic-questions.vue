import { reactive } from 'vue';

export const store = reactive({
  count: 0,
  questionAmount: 0,
  totalScore: [],
  userAnswers: [],
  randomizedOptionBank: [],
  randomizedQuestionBank: [],
});
