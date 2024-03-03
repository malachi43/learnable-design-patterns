import { Telephone } from "./telephone.js";
import { ContactObserver } from "./contactObserver.js";

const telephone = new Telephone()

const contact1 = new ContactObserver("07062726898")
const contact2 = new ContactObserver("09029310736")

//adding observers
telephone.addPhoneNumber(contact1)
telephone.addPhoneNumber(contact2)


//dialing a contact2 phoneNumber
telephone.dialPhoneNumber(contact2)
