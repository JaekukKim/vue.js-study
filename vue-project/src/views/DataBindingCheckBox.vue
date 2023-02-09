<template>
  <div>
    <label><input type="checkbox" v-model="checked"/>{{ checked }}</label>
    <div>
        <label><input type="checkbox" v-model="checked2" value="서울"/>서울</label>
        <label><input type="checkbox" v-model="checked2" value="경기"/>루마니아</label>
        <label><input type="checkbox" v-model="checked2" value="인천"/>소말리아</label>
    </div>
    <hr/>
    <span>체크한 지역 : {{ checked2 }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
        checked : true,
        /* 이거 unchecked 옵션 안걸었는데 왜 체크 해제되니깐 false로 바뀜? 준호좌한테 질문 ㄱ */
        checked2 : []
    };
  },
};
</script>
