import { Telephone } from "./telephone.js";
import { ContactObserver } from "./contactObserver.js";

const telephone = new Telephone()

const user1 = new ContactObserver("2347023232")
const user2 = new ContactObserver("09029310736")

//adding observers
telephone.addPhoneNumber(user1)
telephone.addPhoneNumber(user2)


//dialing a user1 phone number, other observers added will get update on the phone number be dialled.
telephone.dialPhoneNumber(user1)
