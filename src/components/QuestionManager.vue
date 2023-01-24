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

<script lang="ts" src="./QuestionManager.ts" />

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
