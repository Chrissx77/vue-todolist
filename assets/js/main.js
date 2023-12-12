const { createApp } = Vue

createApp({
    data() {
        return {
            message: "",



            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },

    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        addTodo() {
            this.todos.unshift({ text: this.message, done: false });
        }
    },

    mounted() {
        console.log("App Caricata!");
    }

}).mount('#app')