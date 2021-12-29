import { configureStore } from "@reduxjs/toolkit";
import participantReducer from "./reducers/participantReducer";
import userReducer from "./reducers/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    participant: participantReducer,

    //  TODO: this reducers

    // contact: contactReducer,
    // familyData: familyDataReducer,
    // familyMembers: familyMembersReducer,
    // health: healthReducer,

    // school: schoolReducer,
  },
});
