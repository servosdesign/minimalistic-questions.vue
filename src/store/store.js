import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  questionAmount: 0,
  totalScore: [],
  userAnswers: [],
  randomizedOptionBank: [],
  randomizedQuestionBank: [],

  resetAllData () {
    this.count = 0
    this.questionAmount = 0
    this.totalScore = []
    this.userAnswers = []
    this.randomizedOptionBank = []
    this.randomizedQuestionBank = []
  }
})
