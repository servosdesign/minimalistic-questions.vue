import { defineComponent } from 'vue'
import { store } from '../store/store'
import questionBank from '../assets/questionBankData'
import questionManagementMethods from '../assets/questionManagement'

export default defineComponent({
  data () {
    return {
      store
    }
  },
  created () {
    // Randomize the options
    questionManagementMethods.randomizeData(questionBank, store.randomizedQuestionBank, store.randomizedOptionBank)
  },
  unmounted () {
    for (let i = 0; i < store.randomizedQuestionBank.length; i++) {
      store.randomizedQuestionBank[i].selected = []
    }
  },
  methods: {
    generateKey () {
      return (new Date().getTime() + Math.floor(Math.random() * 1000).toString())
    },
    collectUserAnswer () {
      const userChoice = this.$refs.checked
      const userAnswer = store.randomizedOptionBank[store.count]

      for (let i = 0; i < userChoice.length; i++) {
        if (userChoice[i].checked) {
          for (let j = 0; j < userAnswer.length; j++) {
            if (userChoice[i].value === userAnswer[j].text) {
              store.userAnswers[store.count] = userAnswer[j].correct
            }
          }
        }
      }
    }
  }
})
