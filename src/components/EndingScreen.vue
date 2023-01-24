<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <h3 id="endingHeader">
      Your total score is:
    </h3>
    <p> {{ store.totalScore }} / {{ store.questionAmount }}</p>
    <p>Click the button below to start again!</p>
    <TraversalButtons
      button-symbol="&#x21bb"
      :button-name="buttonSymbol"
      @click="restartQuiz"
    />
  </div>
</template>

<script>
import { store } from '../store/store.js'
import TraversalButtons from './TraversalButtons.vue'

export default {
  components: {
    TraversalButtons
  },
  props: {
    quizFinished: {
      type: Boolean,
      default: false
    },
    buttonName: {
      type: [Object, String],
      default: () => {}
    },
    buttonSymbol: {
      type: String,
      default: ''
    }
  },
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
}
</script>
