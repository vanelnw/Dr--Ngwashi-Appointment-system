import React from "react";
import { Input, Space } from "antd";
import AppCard from "./AppCard";
import { useDispatch } from "react-redux";
import { searchRecord } from "../redux/Appointments/appointmentSlice";
const { Search } = Input;

function HomeState() {
  const dispatch = useDispatch();
  const onSearch = (value) => dispatch(searchRecord(value));
  return (
    <div>
      <div className="statWrapper">
        <Space size="middle" className="statHead">
          <h3>Appointments</h3>{" "}
          <Search
            placeholder="Search"
            onSearch={onSearch}
            className="searchInput"
          />
        </Space>
        <Space className="statCards">
          <AppCard title="Missed" value="15" color="red" />
          <AppCard title="Recheduled" value="21" color="yellow" />
          <AppCard title="Passed" value="05" color="green" />
        </Space>
      </div>
    </div>
  );
}

export default HomeState;
