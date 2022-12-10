import { createQueue } from "./queue.js";

const queue = createQueue();
const del = () => { console.log("to delete"); };
queue.add(() => { console.log("Hello World"); });
queue.add(del);
queue.add(() => { console.log("to delete 2"); });
queue.cancel(del);
queue.execute();
queue.execute();
queue.execute();