const { createApp } = Vue

createApp({
    data() {
        return {
            message: "",
            error: false,
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
            if (this.message.length < 5) {
                this.error = true;
                console.log("sono qui");
            }
            else {
                this.todos.unshift({ text: this.message, done: false });
                this.message = "";
                this.error = false;
            }
        },

        checkDone(index) {
            if (this.todos.length > 0) {
                if (this.todos[index].done === false) {
                    this.todos[index].done = true;
                }
                else {
                    this.todos[index].done = false;
                }
            }
        }
    },

    mounted() {
        console.log("App Caricata!");
    }

}).mount('#app')