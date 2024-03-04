I guess some of us have heard the term design pattern, if you're yet to, don't worry, you will as you progress along your coding journey. Very few of us really know what the term means. Some seem to interprete it wrongly also. Let us take a walk about what `Design Pattern` really is.

# What is a design pattern?

A `Design Pattern` serve as a means of solving common programming problems using tested and proven solutions. Knowledge of Design Patterns help us to write maintainable codes. Design patterns provide a common vocabulary to structure code, making it easier to understand.

To put this definition into perspective, in this repository we used one of the Design Patterns called, The Observer Pattern. This pattern is used in cases where we want to notify one object when another object changes while providing less coupling between both objects. Let us take a `Notification System` for example, imagine you're asked by your boss to build a notification system where users can subscribe and also unsubscribe if the want to receive updates or not concerning a particular context(politics, technology, web3 and many others). The Observer Pattern is well suited for this type of problem. So how do we go about it?

Let us pen down our steps:

1. First we would create a class called `Subject`, this class will help us to add, remove and notify observers (users that subscribe to get update on a particular context or unsubscribe not to get update anymore).

2. We would create another class called `Observer`, this will have a method that would be called by the instance of the `Subject class` to pass to it the recent updated context we're interested in.

3. Then we create two other classes that extend the Subject and the Observer classes based on our choice on which should be the ```Subject``` and which should be the ```Observer``` (In this repo we used the Telephone class as the ```subject``` and the ContactObserver class as the ```observer```, the file names for this classes is same with their class name but saved using camel-casing - ```telephone.js``` , ```contactObserver.js``` )
