<template>
    <div>
        <!-- 기본적은 바인딩 옵션 : htmlString의 내용을 보면 알겠지만 태그를 삽입한다.
            하지만 {{  }} 기호를 사용하여 삽입하면 "텍스트"그대로 출력이 된다.-->
        <div>{{ htmlString }}</div>

        <!-- 태그 내에서 바인딩할 경우의 옵션 v-html : 문자열에 태그를 넣어 출력할려면 아래와 같은 방법을 사용하여야 한다.
            v-html = "" 요소를 이용하여 삽입해주어야 한다-->
        <div v-html="htmlString"></div>
    </div>
</template>
<script>
export default {
    data() { 
        return {
            htmlString : '<p style="color:#42b983;">이건 vue.js 기본색입니다. 너무 맘에드네요</p>'
        };
    }
}
</script>