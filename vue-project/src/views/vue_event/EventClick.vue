<template>
    <div>
        <button type="button" @click="increaseCounter">1씩 증가하는 버튼</button>
        <!-- @이벤트명="함수명" 식으로 이벤트를 작성한다. -->

        <p>현재 카운트 : {{ counter }}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                counter : 0,
            };
        },
        /* vue.js에서 메소드(함수)를 만드는 방식이다. methods (data(){} 범위 밖에선언한 구역) 내부에 선언해주어야 한다. */
        methods : {
            increaseCounter(){
                this.counter = this.counter + 1;
            }
        }
    }
</script>