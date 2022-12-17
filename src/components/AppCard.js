import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectMissedRecord,
  selectPassedRecord,
  selectRecheduledRecord,
} from "../redux/Appointments/appointmentSlice";

function AppCard({ title, value, color }) {
  const numCompletedTodos = useSelector(selectRecheduledRecord);
  const numPassedTodos = useSelector(selectPassedRecord);
  const numMissedTodos = useSelector(selectMissedRecord);

  const RecordsCounter = () => {
    if (title === "Recheduled") {
      return numCompletedTodos;
    } else if (title === "Passed") {
      return numPassedTodos;
    } else {
      return numMissedTodos;
    }
  };

  return (
    <Card
      className={"card " + color}
      bodyStyle={{
        padding: "10px 15px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h3>{title}</h3>
      <strong>{RecordsCounter()}</strong>
    </Card>
  );
}

export default AppCard;
