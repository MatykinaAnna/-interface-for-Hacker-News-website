export class News{
    public date: Date
    constructor(
        public by: string,
        public descendants: number,
        public id: number,
        public score: number,
        public time: number,
        public title: string,
        public type: string,
        public url: string
    ){
        this.date = new Date(time)
    }
}