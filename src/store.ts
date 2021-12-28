import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    //  TODO: this reducers

    // contact: contactReducer,
    // familyData: familyDataReducer,
    // familyMembers: familyMembersReducer,
    // health: healthReducer,
    // participant: participantReducer,
    // school: schoolReducer,
  },
});
