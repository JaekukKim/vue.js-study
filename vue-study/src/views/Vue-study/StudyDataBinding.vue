<template>
  <!--
    데이터 바인딩을 사용하는 이유 {{ }}
    1. 자바스크립트의 데이터를 HTML에 편하게 꽂아넣기 위함.
    2. HTML에 하드코딩 (값을 변수로 지정하지 않고 때려박는 행위) 했을 경우 값의 수정이 매우 복잡하다. 이걸 방지하기 위함.

    3. (핵심)Vue의 실시간 자동 렌더링 기능을 이용하기 위함.
    => vue는 data(){}내부를 변경하면 HTML에도 실시간으로 데이터가 자동으로 반영이 된다.
    => 실시간 자동 렌더링을 하기 위해선 {{  }} 식으로 이루어진 데이터 바인딩을 반드시 해주어야 한다.
    ex) 부동산 사이트의 가격범위, 장소, 전세or월세등 이런 검색 범주를 바꾸었을때 실시간으로 데이터가 갈아치워진다.
        이것이 바로 vue의 자동 렌더링 기능이 적용된 부분. 순수 JS로 fetch의 ajax를 사용할 수 도 있지만 그건 너무 복잡함.
        뭔소린지 모르겠으면 직접 들어가서 마우스클릭 몇번으로 바뀌는걸 보셈.
    결론적으로. 자주 바뀔거 같은 데이터들은 반드시 데이터 바인딩을 이용하여 바꿔주자.
    -->
  <div>
    <h1 :style=dataStyle>제목</h1>
    <!--
      아래 databinding으로 datastyle을 명시해 주었다. 이럴때는 {{  }} 기호가 아닌
      :style (vue문법임 그냥) 식으로 명시해주면 사용이 가능하다.
    -->
    <h4>데이터 바인딩 테스트 1</h4>
    <p>데이터 바인딩 1의 값 : {{ databinding1 }}</p>
  </div>
  <div>
    <h4>데이터 바인딩 테스트 2</h4>
    <p>데이터 바인딩 2의 값 : {{ databinding2 }}</p>
  </div>
</template>

<script>
export default {
  name : 'DataBindingExam',
  data() {
    return {
      databinding1: 10,
      databinding2 : 20,
      dataStyle : 'color : green'
    };
  },
};
</script>
