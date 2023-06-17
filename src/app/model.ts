export class Model {
    user;
    items;
    constructor() {
        this.user = 'Göktuğ',
            this.items = [
                new ToDoItems("Spor", false),
                new ToDoItems("Kahvaltı", false),
                new ToDoItems("Sinema", true),
                new ToDoItems("Kahve", false),
            ];
    }
}

export class ToDoItems {
    description;
    action;

    constructor(description:any, action:any) {
        this.description = description;
        this.action = action;
    }
}
