<template>

 <div>
  <input type="text" v-model="nomor" @keyup.enter="setNomor"/>
  <button class="btn btn-primary" @click="getData">Save</button>
  <nuxt-link to="/about">about</nuxt-link>
    
      <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                  <th>aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in response" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.title}}</td>
                    <td class="btn btn-danger" @click="getDelete(item.id)">delete</td>
                </tr>
            </tbody>
        </table>
    </div>   
</template>

<script>
import Counter from '~/components/Counter.vue';
import api from '@/controller/api'
export default {
  name: 'IndexPage',
  mixins:[api],
  data(){
    return {
nomor:'',
response:[]
    }
  },
  methods:{
    setNomor(){
      this.$store.commit('counter/setNomor',this.nomor)
    },
    async getData(){
      const res=await this.getJson(this.nomor)
      this.response=res.data
    },
    getDelete(id){
const i=this.response.findIndex((e)=> e.id==id)
this.response.splice(this.response[i],1)
//delete   
    }
  },
  components:{
    Counter
  },
  props:[],
  computed:{

  },
  created(){},

}
</script>
