<template>
  <div class="content">
    <h3>Welcome to the quiz!</h3>
    <p>Choose your total amount of questions below</p>
    <select
      v-model="userSelection"
      @change="setTotalQuestionAmount()"
    >
      <option
        disabled
        value="null"
      >
        Please select one
      </option>
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
      <option value="4">
        4
      </option>
      <option value="5">
        5
      </option>
      <option value="6">
        6
      </option>
      <option value="7">
        7
      </option>
      <option value="8">
        8
      </option>
      <option value="9">
        9
      </option>
      <option value="10">
        10
      </option>
    </select>
  </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
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
}
</script>

<style scoped>
.content {
  text-align: center;
}

.content h3 {
  margin-top: 250px;
}
</style>
