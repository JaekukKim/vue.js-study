<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>게시글 번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                    <tr key="i" v-for="(board, i) in boardList">
                        <td>{{ board.bno }}</td>
                        <td>{{ board.subject }}</td>
                        <td>{{ board.content }}</td>
                        <td>{{ board.writer }}</td>
                        <td>{{ board.reg_date }}</td>
                        <td>{{ board.readCount }}</td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            boardList: []
        };
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            this.boardList = await this.$api("http://localhost:8080/board/boardListVue","get") // 백엔드 주소
        }
    }
}
</script>
<style scoped>
table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width:  100%;
}
td, th {
    border: 1px solid #aaaaaa;
    text-align: left;
    padding: 10px;
}
</style>