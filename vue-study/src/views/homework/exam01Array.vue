<template>
    <h2>현재 있는 제품 : {{ products }}</h2>
    <div>
        <h4>{{ products[0] }}</h4>
        <p>10만원</p>
    </div>
    <div>
        <h4>{{ products[1] }}</h4>
        <p>20만원</p>
    </div>
    <div>
        <h4>{{ products[2] }}</h4>
        <p>30만원</p>
    </div>
</template>

<!--
    자바스크립트 array 자료형은 자바에서의 배열과 같다. 쉽다.
    불러오는 방식도 완전 똑같다. 배열이름[인덱스넘버] 이런식으로 불러온다.
-->
<script>
    export default{
        name : 'ArrayExam',
        data(){
            return {
                products : ['1번제품','2번제품','3번제품'],
            }
        }
    }
</script>