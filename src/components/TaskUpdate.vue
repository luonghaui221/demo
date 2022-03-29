<template>
    <button @click="updateHandle" class="btn btn-primary edit">
        sửa
    </button>
</template>

<script>
    export default {
        props:['id'],
        methods:{
            updateHandle(){
                this.$emit('enableEdit')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>