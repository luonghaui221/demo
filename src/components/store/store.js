import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tasks: [
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
    ]
  },
  mutations: {
    addTask(state, {id,name,status}) {
      state.tasks.push({
        'id':id,
        'name':name,
        'status':status
      });
    },
    updateTask(state, task) {
      const index = state.tasks.findIndex(t => t.id === task.id);
      Object.assign(state.tasks[index], task)
    },
    deleteTask(state, id) {
      let index = state.tasks.findIndex(t => t.id === id);
      state.tasks.splice(index, 1)
    }
  },
  actions: {
    addTask(context, task) {
      task.id = context.getters.getLastElement.id + 1;
      context.commit('addTask',task)
    },
    updateTask(context, task) {
      console.log('update')
      context.commit('updateTask',task)
    },
    deleteTask(context, id) {
      context.commit('deleteTask',id)
    }
  },
  getters: {
    completed({tasks}){
      return tasks.filter(t=>t.status);
    },
    remaining({tasks}){
      return tasks.filter(t=>!t.status);
    },
    listTasks({tasks}){
      return tasks.slice(0);
    },
    getLastElement({tasks}){
      return tasks.slice(-1)[0];
    }
  }
})