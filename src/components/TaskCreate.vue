<template>
  <div class="create">
    name:
    <input type="text" v-model="name" />
    status:
    <input type="checkbox" v-model="status" />
    <button v-if="!enableEdit" @click="createHandle()">Thêm</button>
    <button v-else @click="updateHandle()">áp dụng</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.task.id,
      name: this.task.name,
      status: this.task.status,
      enableEdit: this.task.enableEdit,
    };
  },
  props: {
    task: {
      type: Object,
      default: function () {
        return {
          id: null,
          name: "",
          status: false,
        };
      },
    },
  },
  methods: {
    createHandle() {
      this.$parent.$emit("taskCreate", this.name,this.status);
      this.name = ''
      this.status =false
    },
    updateHandle() {
      this.enableEdit = !this.enableEdit;
      this.$emit("edited",this.id,this.name,this.status);
      this.$parent.$emit("taskEdit", this.id,this.name,this.status);
      this.name = "";
      this.status = false;
    },
  },
};
</script>

<style scoped>
.create {
  margin: 20px 0px;
}
</style>