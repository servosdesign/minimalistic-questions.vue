import { defineComponent } from 'vue'
import { store } from '../store/store'

export default defineComponent({
  data () {
    return {
      userSelection: null
    }
  },
  methods: {
    setTotalQuestionAmount () {
      store.questionAmount = this.userSelection
    }
  }
})
