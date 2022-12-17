import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppointmentForm from "./pages/AppointmentForm";
import Appointments from "./pages/Appointments";
import { fetchRecords } from "./redux/Appointments/appointmentSlice";
import Header from "./components/Header";


function App() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.appointments.page);

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);


  return (
    <div className="App">
      <Header /> 
      {page === "home" ? <Appointments /> : <AppointmentForm />}
    </div>
  );
}

export default App;
