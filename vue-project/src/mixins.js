import axios from 'axios'

export default {
    methods: {
        async $api(url,method,data) {
            return (await axios({
                method: method,
                url,
                data
            }).catch(e => {
                console.log(e);
                alert("데이터 통신중 이상이 발생!");
            })).data;
        }
    }
}