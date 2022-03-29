<template>
  <div class="row">
    <div class="d-flex align-items-center">
      <task-create @addTask="addTask" />
    </div>
    <task-list-item
      v-for="(task, index) in listTasks"
      :key="index"
      :task="task"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TaskCreate from "./TaskCreate.vue";
import taskListItem from "./TaskListItem.vue";
export default {
  name: "TaskList",
  computed: {
    listTasks() {
      return this.$store.getters.listTasks;
    },
  },
  components: {
    taskListItem,
    TaskCreate
  },
  methods:{
    ...mapActions(['addTask'])
  }
};
</script>

<style scoped>
.btn {
  width: 200px;
  height: 50px;
  display: inline;
  margin: 0 20px;
}
</style>