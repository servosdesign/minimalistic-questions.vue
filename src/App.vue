<template>
  <div>
    <section v-if="!isQuestionAmountSelected">
      <div class="wrapper">
        <StartingScreen />
      </div>
    </section>

    <section v-if="!quizFinished && isQuestionAmountSelected">
      <h3 id="counter">
        Question {{ store.count + 1 }} / {{ store.questionAmount }}
      </h3>
      <div class="wrapper">
        <TraversalButtons
          :style="{ visibility: buttonVisible ? 'visible' : 'hidden' }"
          :button-name="buttonNameOptions"
          button-symbol="&lt;"
          @click="toggleQuestionCount('prev')"
        />
        <QuestionManager ref="userData" />
        <TraversalButtons
          :button-name="buttonNameOptions"
          button-symbol="&gt;"
          @click="toggleQuestionCount('next')"
        />
      </div>
    </section>

    <section v-if="quizFinished">
      <div
        id="questions"
        :style="{ visibility: quizFinished ? 'visible' : 'hidden' }"
      >
        <EndingScreen
          :quiz-finished="true"
          :button-name="buttonNameOptions"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./App.ts" />

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
