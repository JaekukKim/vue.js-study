
import { countReset } from 'console';

<template>
  <div>
    <button type="button" @click="increaseCounter">카운트 증가</button>
    <button type="button" @click="decreaseCounter">카운트 감소</button>
    <button type="button" @click="one(), two()">여러개의 함수 호출</button>
    <br/>
    <br/>
    <button type="button" @click="setCounter(7)">카운트 초기화</button>
    <button type="button" @click="resetCounter(0)">ㄹㅇ 카운트 초기화</button>
    <h1><p>현재 카운트 : {{ counter }}</p></h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter = this.counter + 1
    },
    decreaseCounter () {
      this.counter = this.counter - 1
    },
    setCounter(counter) {
      this.counter = counter
    },
    one() {
      alert("첫번째 메세지 창입니다.")
    },
    two() {
      alert("두번째 메세지 창입니다.")
    },
    resetCounter(counter) {
      this.counter = counter
    }
  }
}
</script>
