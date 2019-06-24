import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      list: [
        {task: 'Do Laundry', priority: 'low', complete: false},
        {task: 'Tidy Room', priority: 'low', complete: false},
        {task: 'Feed Myself', priority: 'high', complete: true}
      ],
      newTask: ''
    },
    methods: {
      saveNewTask: function () {
        this.list.push({
          task: this.newTask,
          priority: 'low',
          complete: false
        });
        this.newTask = ''
      },
      markTaskComplete: function (index) {
        this.list[index].complete = true;
      }
    }
  });
});
