import { configureStore } from "@reduxjs/toolkit";
import appointments from "./Appointments/appointmentSlice";

const store = configureStore({
  reducer: {
    appointments,
  },
});

export default store;
