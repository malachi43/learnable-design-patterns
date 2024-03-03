import { Observer } from "./observer.js";

export class ContactObserver extends Observer {
    constructor(phoneNumber) {
        super()
        this.phoneNumber = phoneNumber
    }

    //Override the superclass "update" method.
    update(context) {
        const { phoneNumber } = context
        console.log(`\n${phoneNumber}\nNow Dialling: ${phoneNumber}\n`)

    }
}