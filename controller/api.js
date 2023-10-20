export default {
    methods:{
    async getJson(){
      
        return this.$axios.get('https://jsonplaceholder.typicode.com/todos');
    },
    async addJson(str){
      
        return this.$axios.get('https://jsonplaceholder.typicode.com/todos/'+str);
    }
}
}