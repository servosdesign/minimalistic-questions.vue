<!-- eslint-disable vue/no-parsing-error -->
<template>
  <section v-if="!isQuestionAmountSelected">
    <div class="wrapper">
      <StartingScreen />
    </div>
  </section>

  <section v-if="!quizFinished && isQuestionAmountSelected">
    <h3 id="counter">Question {{ store.count + 1 }} / {{ store.questionAmount }}</h3>
    <div class="wrapper">
      <TraversalButtons :style="{ visibility: buttonVisible ? 'visible' : 'hidden' }" :buttonName="buttonNameOptions"
        buttonSymbol="&lt" @click="toggleQuestionCount('prev')"></TraversalButtons>
      <QuestionManager ref="userData" />
      <TraversalButtons :buttonName="buttonNameOptions" buttonSymbol="&gt" @click="toggleQuestionCount('next')">
      </TraversalButtons>
    </div>
  </section>

  <section v-if="quizFinished">
    <div id='questions' :style="{ visibility: quizFinished ? 'visible' : 'hidden' }">
      <EndingScreen :quizFinished="true" :buttonName="buttonNameOptions" />
    </div>
  </section>
</template>

<script>
import { store } from './store/store.js';
import QuestionManager from './components/QuestionManager.vue';
import TraversalButtons from './components/TraversalButtons.vue';
import EndingScreen from './components/EndingScreen.vue';
import StartingScreen from './components/StartingScreen.vue';


export default {
  data() {
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
  methods: {
    toggleQuestionCount(questionCountButtonName) {
      if (questionCountButtonName === 'next') {
        this.collectUserAnswer();
        if (store.count < store.questionAmount - 1) {
          store.count++;
        } else {
          this.displayScoreScreen();
        }
      } else if (questionCountButtonName === 'prev') {
        if (store.count > 0) {
          store.count--;
        }
      }
      this.toggleButtonsShown();
    },
    toggleButtonsShown() {
      if (store.count > 0) {
        this.enableButtons();
      }
      if (store.count <= 0) {
        this.disableButtons();
      }
    },
    displayScoreScreen() {
      this.calculateTotalScore();
      this.quizFinished = true;
    },
    restartQuiz() {
      store.resetAllData();
      this.toggleButtonsShown();
      this.quizFinished = false;
    },
    calculateTotalScore() {
      store.totalScore = store.userAnswers.filter(value => value === 'true').length;
    },
    collectUserAnswer() {
      this.$refs.userData.collectUserAnswer()
    },
    enableButtons() {
      this.buttonVisible = true;
    },
    disableButtons() {
      this.buttonVisible = false;
    }
  },
  beforeMount() {
    this.toggleButtonsShown();
  },
  computed: {
    isQuestionAmountSelected() {
      if (store.questionAmount === 0) {
        return false;
      }
      return true;
    }
  },
  components: {
    QuestionManager,
    TraversalButtons,
    EndingScreen,
    StartingScreen
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

.wrapper {
  display: flex;
  width: auto;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

#counter {
  display: flex;
  margin-top: 250px;
  height: 20px;
  justify-content: center;
}

#choiceOptions {
  vertical-align: middle;
}

.questionHeader {
  margin-bottom: 20px;
}

.questionOption {
  margin-top: 35px;
  font-weight: normal;
}

#restart {
  visibility: hidden;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  margin-bottom: 420px;
}

#questions {
  margin-left: 200px;
  margin-right: 200px;
  text-align: center;
}

#questions ul {
  padding-top: 40px;
}

#questions ul li {
  margin: 0 auto;
}

#endingHeader {
  margin-top: 250px;
  height: 20px;
}

p {
  font-size: 13px;
}

.hide {
  visibility: hidden;
}
</style>