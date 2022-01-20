import { configureStore } from "@reduxjs/toolkit";
import participantReducer from "./reducers/participantReducer";
import addressReducer from "./reducers/addressReducer";
import userReducer from "./reducers/userReducer";
import contactReducer from "./reducers/contactReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    participant: participantReducer,
    address: addressReducer,
    contact: contactReducer,
    //  TODO: this reducers
    // familyData: familyDataReducer,
    // familyMembers: familyMembersReducer,
    // health: healthReducer,

    // school: schoolReducer,
  },
});
