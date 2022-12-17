import React, { useState } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  changeHeaderSize,
  setHomePage,
  setInitialFormValues,
} from "../redux/Appointments/appointmentSlice";
import { columns } from "./data";

function AppTable() {
  const dispatch = useDispatch();
  const ddata = useSelector((state) => state.appointments.appointments);

  const displaydata = ddata.map((item) => {
    return {
      key: item._id,
      name: item.name,
      code: item.code,
      age: item.age,
      address: item.address,
      phone: item.phone,
      status: item.appointmentStatus,
    };
  });

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const initialValues = useSelector(
    (state) => state.appointments.initialFormValues
  );

  const handlePlusClick = () => {
    dispatch(changeHeaderSize());
    dispatch(setHomePage("form"));
  };
    
    console.log(displaydata.sort());

  return (
    <div style={{ marginLeft: "5%", position: "relative" }}>
      <Table
        columns={columns}
        dataSource={displaydata}
        // onChange={onChange}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              dispatch(setInitialFormValues(record.key));
              dispatch(setHomePage("form"));
            },
          };
        }}
      />
      <Button className="addBtn" onClick={handlePlusClick}>
        <strong>+</strong>
      </Button>
    </div>
  );
}

export default AppTable;
