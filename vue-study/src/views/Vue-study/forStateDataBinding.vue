<template>
    <!--
        프론트엔드 단은 html태그를 피할 수 없다. 하지만 vue.js에선 html태그를 일일히
        작성하는것도 하드코딩에 해당된다. 이럴경우 반복문을 사용하여 태그 양산이 가능하다.

        vue.js에서의 반복문은
        [v-for="변수작명하셈 in 반복횟수" :key="작명변수쓰셈"]
        이런식으로 사용이 가능하다.
     -->
    <div class="menu">
        <a v-for="(menuName,i) in menu" :key="i">{{menuName}}</a>
        <!-- 문법 : v-for="변수명 in data바인딩이름 :key="변수명" -->
        <!--
            key의 용도는 반복문이 돌아가면서 변하는 데이터들을 저장하는 역할을 한다.
            v-for의 변수명은 최대 2개까지 선언이 가능하다. (변수1,변수2) 이런식으로 지어주면 되는데
            이때의 경우 변수1은 array 내의 데이터, 오른쪽 변수는 1씩 증가하는 정수 가 된다.
        -->
    </div>

    <h2>현재 있는 제품 : {{ products }}</h2>
    <!-- 반복문으로 뭉탱이를 출력하고 싶을땐 최상위 부모태그에 반복문을 걸어버려 출력이 가능하다. -->
    <div v-for="(product,i) in products" :key="i">
        <h4>{{ product }}</h4>
        <p>10만원</p>
    </div>
    <!-- <div>
        <h4>{{ products[1] }}</h4>
        <p>20만원</p>
    </div>
    <div>
        <h4>{{ products[2] }}</h4>
        <p>30만원</p>
    </div> -->
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
                menu : ['Home','Products','About'],
                products : ['1번제품','2번제품','3번제품'],
            }
        }
    }
</script>

<style scoped>
    .menu{
        background: #e9e9e9;
        padding: 15px;
        border-radius: 5px;

    }
    .menu a{
        color: navy;
        padding: 10px;
    }
</style>