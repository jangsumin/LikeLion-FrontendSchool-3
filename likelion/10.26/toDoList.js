class Todo {
    constructor(content, state) {
        this.content = content;
        this.state = state;
    }

    changeState() {
        this.state = !this.state;
    }
}

class TodoManager {
    constructor(toDoList) {
        this.toDoList = [];
    };

    addItem(content) {
        this.toDoList.push(new Todo(content, false));
    };
    getItems() {
        return this.toDoList;
    };
    getLeftTodoCount() {
        return this.toDoList.filter(e => e.state === false).length;
    };
    resetItem() {
        while(this.toDoList.length > 0) {
            this.toDoList.pop();
        }
    };
};

let todo = new TodoManager();
console.log(todo);
todo.addItem('졸기');
todo.addItem('자기');
console.log(todo.getItems());
todo.getItems()[1].changeState();
console.log(todo.getLeftTodoCount());
todo.getItems()[0].changeState();
console.log(todo.getLeftTodoCount());
todo.resetItem();
console.log(todo);