<template>
    <button @click="deleteHandle(id)" class="btn btn-danger delete">
        xóa
    </button>
</template>

<script>
    export default {
        name:'taskDelete',
        props:['id'],
        methods:{
            deleteHandle(id){
                this.$parent.$emit('taskDelete',id)
            }
        },components:{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>