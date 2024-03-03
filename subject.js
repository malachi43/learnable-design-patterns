
//This class will help us to keep track of observers that are interested to be notified for changes
export class Subject {

    constructor() {
        this.set = new Set()

        //The regex ensure the number must be atleast 10 digits and above.
        this.numRegex = /[0-9]{10,}/
    }
    //add the observer, so it can receive updates.
    addObserver(observer) {
        if (this.numRegex.test(Number(observer.phoneNumber)))
            this.set.add(observer)
    }
    //observer won't receive updates anymore.
    removeObserver(observer) {
        if (this.numRegex.test(Number(observer.phoneNumber))) {
            this.set.delete(observer)
        }
    }
    //send updates to all added observers.
    notify(context) {
        for (let observer of this.set.values()) {
            observer.update(context)
        }
    }
}
