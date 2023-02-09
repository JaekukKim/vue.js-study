<template>
    <div>
        <!-- src같은 속성을 사용하기 위해선 v-bind로 묶어주어야 한다. -->
        <img v-bind:src="imgSrc"/>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                imgSrc : require("../assets/logo.png")
                /* 
                    interface RequireResolve {
                        (id: string, options?: { paths?: string[] | undefined; }): string;
                        paths(request: string): string[] | null;
                    }
                    require 메소드는 nodejs.module 내부의 여러가지를 인터페이스의 구현체의 일부분이다. string타입의 경로를 요구한다.
                */
            };
        }
    }
</script>