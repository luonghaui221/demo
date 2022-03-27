<template>
  <div class="row">
    <div class="d-flex align-items-center">
      <task-create/>
    </div>
    <task-list-item
      @taskEdit="taskEdit"
      @taskDelete="taskDelete"
      v-for="(task, index) in myTasks"
      :key="index"
      :task="task"
    />
  </div>
</template>

<script>
import TaskCreate from './TaskCreate.vue';
import taskListItem from "./TaskListItem.vue";
export default {
  data() {
    return {
      myTasks: this.tasks,
    };
  },
  props: ["tasks"],
  name: "TaskList",
  computed: {
 
  },
  methods: {
    taskDelete(id) {
      this.$emit("taskDelete", id);
    },
    taskEdit(id,name,status){
      this.$emit('taskEdit',{id,name,status})
    }
  },
  components: {
    taskListItem,
    TaskCreate,
  },
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