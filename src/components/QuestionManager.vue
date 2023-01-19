<template>
  <div>
    <h3 class="questionOption">
      {{ store.randomizedQuestionBank[store.count].question }}
    </h3>
    <div id="questions">
      <form>
        <section
          v-for="(option, index) in store.randomizedOptionBank[store.count]"
          :key="index + generateKey()"
        >
          <input
            :id="'radio' + index"
            ref="checked"
            v-model="store.randomizedQuestionBank[store.count].selected"
            type="radio"
            :name="'quiz_question' + store.count"
            :value="option.text"
          >
          <label :for="'radio' + index">{{ option.text }}</label>
          <label>{{ option.selected }}</label>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store.js'
import questionBank from '../assets/questionBankData.js'
import questionManagementMethods from '../assets/questionManagement.js'

export default {
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
