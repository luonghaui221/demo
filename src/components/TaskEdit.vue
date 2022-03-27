<template>
    <button @click="updateHandle" class="btn btn-primary edit">
        sửa
    </button>
</template>

<script>
    export default {
        data() {
            return {
                enableEdit: false
            }
        },
        props:['id'],
        methods:{
            updateHandle(){
                this.enableEdit = !this.enableEdit
                this.$emit('taskEdit',)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>