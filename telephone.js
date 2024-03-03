import { Subject } from "./subject.js";


export class Telephone extends Subject {
    constructor() {
        super()
    }
    //add number as an observer entity.
    addPhoneNumber(observer) {
        this.addObserver(observer)
    }
    //this specified number will not receive updates on state changes.
    removePhoneNumber(observer) {
        this.removeObserver(observer)
    }
    dialPhoneNumber(observer) {
        this.notify(observer)
    }
}