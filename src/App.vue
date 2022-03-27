<template>
  <task-list
    @taskEdit="taskEdit"
    @taskDelete="deleteTask"
    @taskCreate="taskCreate"
    :tasks="tasks"
  />
</template>

<script>
import taskList from "./components/TaskList.vue";
const tasks = [
  {
    id: 1,
    name: "Desktop Support Technician",
    status: true,
  },
  {
    id: 2,
    name: "Senior Sales Associate",
    status: true,
  },
  {
    id: 3,
    name: "Web Developer III",
    status: false,
  },
  {
    id: 4,
    name: "Actuary",
    status: true,
  },
  {
    id: 5,
    name: "Help Desk Operator",
    status: true,
  },
];

export default {
  data() {
    return {
      tasks: tasks,
    };
  },
  name: "App",
  components: {
    taskList,
  },
  methods: {
    deleteTask(id){
      let index = this.tasks.findIndex(t=>t.id===id)
      this.tasks.splice(index,1)
    },
    taskCreate(name,status){
      let id = this.tasks[this.tasks.length-1].id+1;
      this.tasks.push({id,name,status})
    },
    taskEdit(task){
      let index = this.tasks.findIndex(t=>t.id===task.id)
      if(index>=0) this.$set(this.tasks,index,task)
    }
  },
};
</script>

<style>
</style>
