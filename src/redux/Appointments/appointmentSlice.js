import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
  page:"home",
  isUpdate: false,
  headerSizDSmall: true,
  initialFormValues: {},
};

export const selectRecheduledRecord = createSelector(
  (state) => state.appointments.appointments,
  (appointments) =>
    appointments.filter((todo) => todo.appointmentStatus === "resheduled").length
);

export const selectPassedRecord = createSelector(
  (state) => state.appointments.appointments,
  (appointments) =>
    appointments.filter((todo) => todo.appointmentStatus === "passed").length
);

export const selectMissedRecord = createSelector(
  (state) => state.appointments.appointments,
  (appointments) =>
    appointments.filter((todo) => todo.appointmentStatus === "missed").length
);

export const fetchRecords = createAsyncThunk(
  "records/fetchRecords",
  async () => {
    const response = await axios.get(
      "https://api-datatellers.onrender.com/api/getAll"
    );
    return response.data;
  }
);

export const addRecord = createAsyncThunk(
  "records/addRecord",
  async (record) => {
    const response = await axios.post(
      "https://api-datatellers.onrender.com/api/post",
      record
    );
    console.log(response.data);
    return response.data;
  }
);

export const updateRecord = createAsyncThunk(
  "records/updateRecord",
  async ({ values, id }) => {
    const response = await axios.patch(
      `https://api-datatellers.onrender.com/api/update/${id}`,
      values
    );
    return response.data;
  }
);

const appointmenSlice = createSlice({
  name: "appointments",
  initialState,

  reducers: {
    setHomePage: (state, action) => {
      state.page = action.payload;
    },

    searchRecord: (state, action) => {
      state.appointments = action.payload
        ? state.appointments.filter((x) => x.name.includes(action.payload))
        : state.appointments;
    },

    changeHeaderSize: (state) => {
      state.headerSizDSmall = !state.headerSizDSmall;
    },

    setInitialFormValues: (state, action) => {
      state.initialFormValues = action.payload
        ? state.appointments.find((x) => x._id === action.payload)
        : {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRecords.fulfilled, (state, action) => {
      state.appointments = action.payload;
    });

    builder.addCase(addRecord.fulfilled, (state, action) => {
      state.appointments.push(action.payload);
    });

    builder.addCase(updateRecord.fulfilled, (state, action) => {
      state.appointments = state.appointments.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
    });
  },
});

export const {
  setHomePage,
  changeHeaderSize,
  setInitialFormValues,
  searchRecord,
} = appointmenSlice.actions;

export default appointmenSlice.reducer;
