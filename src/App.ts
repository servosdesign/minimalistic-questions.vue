import {defineComponent} from 'vue'
import { store } from './store/store'
import QuestionManager from './components/QuestionManager.vue'
import TraversalButtons from './components/TraversalButtons.vue'
import EndingScreen from './components/EndingScreen.vue'
import StartingScreen from './components/StartingScreen.vue'

export default defineComponent({
  components: {
    QuestionManager,
    TraversalButtons,
    EndingScreen,
    StartingScreen
  },
  data () {
    return {
      buttonNameOptions: {
        prev: 'Previous',
        next: 'Next',
        submit: 'Submit'
      },
      buttonSymbol: '',
      buttonVisible: true,
      quizFinished: false,
      store
    }
  },
  computed: {
    isQuestionAmountSelected () {
      if (store.questionAmount === 0) {
        return false
      }
      return true
    }
  },
  beforeMount () {
    this.toggleButtonsShown()
  },
  methods: {
    toggleQuestionCount (questionCountButtonName) {
      if (questionCountButtonName === 'next') {
        this.collectUserAnswer()
        if (store.count < store.questionAmount - 1) {
          store.count++
        } else {
          this.displayScoreScreen()
        }
      } else if (questionCountButtonName === 'prev') {
        if (store.count > 0) {
          store.count--
        }
      }
      this.toggleButtonsShown()
    },
    toggleButtonsShown () {
      if (store.count > 0) {
        this.enableButtons()
      }
      if (store.count <= 0) {
        this.disableButtons()
      }
    },
    displayScoreScreen () {
      this.calculateTotalScore()
      this.quizFinished = true
    },
    restartQuiz () {
      store.resetAllData()
      this.toggleButtonsShown()
      this.quizFinished = false
    },
    calculateTotalScore () {
      store.totalScore = store.userAnswers.filter(value => value === true).length
    },
    collectUserAnswer () {
      this.$refs.userData.collectUserAnswer()
    },
    enableButtons () {
      this.buttonVisible = true
    },
    disableButtons () {
      this.buttonVisible = false
    }
  }
})