import { defineComponent } from 'vue'
import { store } from '../store/store'
import TraversalButtons from './TraversalButtons.vue'

export default defineComponent({
  components: {
    TraversalButtons
  },
  props: ['quizFinished', 'buttonName', 'buttonSymbol'],
  data () {
    return {
      store
    }
  },
  methods: {
    restartQuiz () {
      this.$parent.restartQuiz()
    }
  }
})
