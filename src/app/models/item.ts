export class Item {
    id: number;
    listId: number;
    name: string;

    constructor(data:any) {
        this.id= data.id;
        this.listId = data.listId;
        this.name = data.name;
    }
}