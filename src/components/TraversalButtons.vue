<!-- eslint-disable vue/no-parsing-error -->
<template>
  <ul>
    <li class="icon button">
      <span
        v-if="isPreviousButton"
        class="tooltip"
      >{{ buttonName.prev }}</span>
      <span
        v-if="isSubmitionButton"
        class="tooltip"
      >{{ buttonName.submit }}</span>
      <span
        v-if="isNextButton"
        class="tooltip"
      >{{ buttonName.next }}</span>
      <span
        v-if="isRestartButton"
        class="tooltip"
      >{{ buttonSymbol }}</span>
      <span><i>{{ buttonSymbol }}</i></span>
    </li>
  </ul>
</template>

<script>
import { store } from '../store/store'

export default {
  props: {
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
}
</script>

<style scoped>
.icon {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.icon:hover span,
.icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

ul {
  padding: 0;
}

.button:hover,
.button:hover .tooltip,
.button:hover .tooltip::before {
  background: #0e0e0e;
  color: #ffffff;
}
</style>
