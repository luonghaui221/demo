<template>
  <div class="col-md-12 align-center">
    <div class="card">
      <div v-if="!enableEdit" class="card-body">
        <p class="name">{{task.name }}</p>
        <div>
          <p v-if="task.status">đã hoàn thành</p>
          <p v-else>Chưa hoàn thành</p>
        </div>
        <task-update @enableEdit="enableEdit = !enableEdit" :id="task.id" />
        <task-delete @deleteTask="deleteTask" :id="task.id" />
      </div>
      <div v-else class="card-body">
        <task-create @updateTask="updateTask($event); enableEdit = !enableEdit" :data="{task,enableEdit}" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TaskCreate from "./TaskCreate.vue";
import taskDelete from "./TaskDelete.vue";
import TaskUpdate from "./TaskUpdate.vue";
export default {
  data() {
    return {
      enableEdit: false,
    };
  },
  name: "taskListItem",
  props:['task'],
  methods: {
    ...mapActions(['updateTask','deleteTask'])  
  },
  components: {
    taskDelete,
    TaskUpdate,
    TaskCreate,
  },
};
</script>

<style scoped>
</style>