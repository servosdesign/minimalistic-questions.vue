<template>
  <div>
    <h3 class="questionOption">{{ store.randomizedQuestionBank[store.count].question }}</h3>
    <div id="questions">
      <form>
        <section v-for="(options, index) in store.randomizedOptionBank[store.count]" :key="index + generateKey()">
          <input type="radio" :id="'radio' + index" :name="'quiz_question' + store.count" :value="options.correct">
          <label>{{ options.text }}</label>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store.js';
import questionBank from '../assets/questionBankData.js';
import questionManagementMethods from '../assets/questionManagement.js';

export default {
  data() {
    return {
      store
    }
  },
  methods: {
    generateKey() {
      return (new Date().getTime() + Math.floor(Math.random() * 1000).toString());
    },
    collectUserAnswer() {
      const choice = document.getElementsByName('quiz_question' + store.count);
      for (let i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
          store.userAnswers[store.count] = choice[i].value;
        }
      }
      if (store.userAnswers[store.count] == null) {
        return false;
      }
    },
  },
  beforeMount() {
    questionManagementMethods.randomizeData(questionBank, store.randomizedQuestionBank, store.randomizedOptionBank, this.store.questionAmount);
  },
}
</script>

<style scoped>
section {
  margin: 0;
  float: left;
}

#questions {
  margin-left: 200px;
  margin-right: 200px;
  text-align: center;
}

h3 {
  text-align: center;
}

label,
input {
  padding: 4px;
}
</style>