<template>
  <div class="col-md-12 align-center">
    <div class="card">
      <div v-if="!MyTask.enableEdit" class="card-body">
        <p class="name">{{ this.task.name }}</p>
        <div>
            <p v-if="this.task.status">đã hoàn thành</p>
            <p v-else>Chưa hoàn thành</p>
        </div>
        <task-edit @taskEdit="taskEdit" :id="this.task.id"/>
        <task-delete :id="this.task.id"/>
      </div>
      <div v-else class="card-body">
          <task-create @edited="edited" :task="MyTask"/>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCreate from './TaskCreate.vue';
import taskDelete from './TaskDelete.vue'
import taskEdit from './TaskEdit.vue'
export default {
    data() {
        return {
            MyTask: {
                id : this.task.id,
                name : this.task.name,
                status : this.task.status,
                enableEdit:false
            }
        }
    },
    name:'taskListItem',
    props:['task'],
    components:{
        taskDelete,
        taskEdit,
        TaskCreate,
    },
    methods:{
      taskEdit(){
        this.MyTask.enableEdit = true;
      },
      edited(id,name,status){
        this.MyTask.enableEdit = false;
        this.MyTask.id = id;
        this.MyTask.name = name;
        this.MyTask.status=status;
      }
    },
    
};
</script>

<style scoped>

</style>