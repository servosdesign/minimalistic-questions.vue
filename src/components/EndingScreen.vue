<!-- eslint-disable vue/no-parsing-error -->
<template>
  <h3 id="endingHeader">Your total score is: </h3>
  <p> {{ store.totalScore }} / {{ store.questionAmount }}</p>
  <p>Click the button below to start again!</p>
  <TraversalButtons @click="restartQuiz" buttonSymbol="&#x21bb" :buttonName="buttonSymbol"></TraversalButtons>
</template>

<script>
import { store } from '../store/store.js';
import TraversalButtons from './TraversalButtons.vue';

export default {
  props: ['quizFinished', 'buttonName', 'buttonSymbol'],
  data() {
    return {
      store
    }
  },
  methods: {
    restartQuiz() {
      this.$parent.restartQuiz();
    }
  },
  components: {
    TraversalButtons
  }
}
</script>
