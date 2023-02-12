<template>
    <div class="menu">
        <a v-for="(menuName,i) in menu" :key="i">{{menuName}}</a>
    </div>

    <h2>현재 있는 제품 : {{ products }}</h2>
    <div v-for="(product,i) in products" :key="i">
        <img src="../../assets/logo.png" class="product-img"/>
        <h4>{{ product }}</h4>
        <p>10만원</p>
        <button v-on:click="increase(i)">신고하기</button>
        <!-- 함수를 불러올땐 ()빼고 이름만 기입한다. -->
        <!--
            순수js 방식은 onclick=""이다.
            vue 방식은 v-on:click="" 이다. @click=""도 가능 v-on의 약자는 @이다.
        -->
        <br>
        <span>신고 수 : {{ report[i] }}</span>
    </div>
</template>

<script>
    export default{
        name : 'ArrayExam',
        data(){
            return {
                menu : ['Home','Products','About'],
                products : ['1번제품','2번제품','3번제품'],
                report : [0,0,0]
            }
        },
        methods : {
            increase(i){
                /* 위의 for문의 i를 매개변수로 받아 메소드의 순서도 설정이 가능해 진다는 부분을 알았다. */
                /* 실제로는 순서가 아니다. 그렇게만 보일 뿐. 정확한 로직은
                    1. 메소드의 매개변수로 i를 받음. 여기서 i는 for문의 1씩증가하는 정수 순서임.
                    2. 매개변수를 받은걸 this.report[i]에 넘겨줌, 여기서가 핵심임. report는 배열이고
                        report의 i번째 값만 증가시켜줌.
                    3. 이러한 효과로 "몇번째의 increase 메소드가 실행이 된거같은데? 라는 착시현상이 일어남."
                */
                /* 1번째 신고버튼을 누르면 0번 인덱스의 값만 증가, 이런식으로 돌아간다. */
                this.report[i] += 1;
                /*
                    data안에 선언되있는 변수명을 쓰고 싶을때는 this를 반드시 명시해 주어야 한다.
                    여러개의 변수가 선언이 될 수도 있기 때문.
                */
            }
        },
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
    .product-img{
        width: 50%;
        margin-top: 40px;
    }
</style>