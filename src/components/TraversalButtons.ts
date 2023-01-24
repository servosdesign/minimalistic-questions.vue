import { defineComponent } from 'vue'
import { store } from '../store/store'

export default defineComponent({
  props: ['buttonName', 'buttonSymbol'],
  data () {
    return {
      store
    }
  },
  computed: {
    isPreviousButton () {
      return this.buttonSymbol === '<'
    },
    isNextButton () {
      return this.buttonSymbol === '>' && store.count !== store.questionAmount - 1
    },
    isSubmitionButton () {
      return this.buttonSymbol === '>' && store.count === store.questionAmount - 1
    },
    isRestartButton () {
      return !this.isPreviousButton && !this.isNextButton && !this.isSubmitionButton
    }
  }
})
