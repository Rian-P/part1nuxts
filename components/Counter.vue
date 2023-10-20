<template>
   <div>
    <ul>
        <li v-for="item in nomor" :key="item">
        {{ item }}
        </li>
    </ul>
   </div>
</template>

<script>
export default {
    computed:{
        nomor(){
            return this.$store.getters['counter/getNomor']
        }
    },
methods:{
   
}
}
</script>