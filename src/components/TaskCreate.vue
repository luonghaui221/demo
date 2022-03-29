<template>
  <div class="create">
    name:
    <input type="text" v-model="task.name" />
    status:
    <input type="checkbox" v-model="task.status" />
    <button v-if="!enableEdit" @click="createHandle()">Thêm</button>
    <button v-else @click="updateHandle()">áp dụng</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        id: this.data.task.id,
        name: this.data.task.name,
        status: this.data.task.status,
      },
      enableEdit: this.data.enableEdit,
    };
  },
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          task: {
            id: null,
            name: "",
            status: false,
          },
          enableEdit: false
        };
      },
    },
  },
  methods: {
    createHandle() {
      this.$emit("addTask", { ...this.task });
      this.task.name = "";
      this.task.status = false;
    },
    updateHandle() {
      this.enableEdit = !this.enableEdit;
      this.$emit("updateTask", { ...this.task });
    },
  }
};
</script>

<style scoped>
.create {
  margin: 20px 0px;
}
</style>