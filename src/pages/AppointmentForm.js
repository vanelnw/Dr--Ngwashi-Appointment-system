import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Space,
  TimePicker,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecord,
  setHomePage,
  setInitialFormValues,
  updateRecord,
} from "../redux/Appointments/appointmentSlice";

import moment from "moment";

dayjs.extend(customParseFormat);

function AppointmentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { Option } = Select;
  const { TextArea } = Input;

  const initialValues = useSelector(
    (state) => state.appointments.initialFormValues
  );

  const data = useSelector((state) => state.appointments.appointments);

  const formatDate = (date, format) => {
    if (date) {
      const localTime = moment(date).format(format);
      return dayjs(localTime, format);
    }
  };

  const generateCode = () => {
    const today = new Date();
    const DD = String(today.getDate()).padStart(2, "0");
    const MM = String(today.getMonth() + 1).padStart(2, "0");
    const YY = today.getFullYear().toString().substr(-2);
    const SN = data.length + 1;
    return "A" + SN + DD + MM + YY;
  };

  const IV = {
    ...initialValues,
    appointmentDate: formatDate(initialValues.appointmentDate, "DD/MM/YYYY"),
    requestDate: formatDate(initialValues.requestDate, "DD/MM/YYYY"),
    appointmentTime: formatDate(initialValues.appointmentTime, "HH:mm:ss"),
  };

  const onFinish = (values) => {
    if (initialValues._id) {
      message.success("Submit success!");
      const id = initialValues._id;
      dispatch(updateRecord({ values, id }));
      dispatch(setInitialFormValues());
      navigate("/");
    } else {
      const newValues = {
        ...values,
        code: generateCode(),
      };
      dispatch(addRecord(newValues));
      message.success("Submit success!");
      dispatch(setHomePage("home"))
    }
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <div>
      <Space className="form-title">
        <ArrowLeftOutlined onClick={() => dispatch(setHomePage("home"))} />
        <h4>NEW RECORD</h4>
      </Space>

      <div className="form-wrapper">
        <Form
          form={form}
          layout="vertical"
          initialValues={IV}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Space className="formSection" direction="vertical">
            <h4>General information</h4>
            <Space className="formContent">
              <Form.Item name="code" label="Unique code" rules={[]}>
                <Input disabled placeholder="" />
              </Form.Item>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item name="sex" label="Sex" rules={[{ required: true }]}>
                <Select placeholder="Man" allowClear>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true }]}
              >
                <Input placeholder="6890532566" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input placeholder="email" />
              </Form.Item>
            </Space>
            <hr />
          </Space>

          <Space className="formSection" direction="vertical">
            <h4>Appointment information</h4>
            <Space className="formContent">
              <Form.Item
                name="appointmentDate"
                label="Appointment date"
                rules={[{ required: true }]}
              >
                <DatePicker picker="date" format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item
                name="firstTime"
                label="First Time"
                rules={[{ required: true }]}
              >
                <Select placeholder="No" allowClear>
                  <Option value={false}>NO</Option>
                  <Option value={true}>YES</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="requestDate"
                label="Request date"
                rules={[{ required: true }]}
              >
                <DatePicker picker="date" format="YYYY-MM-DD" />
              </Form.Item>

              <Form.Item
                name="appointmentStatus"
                label="Appointment Status      "
                rules={[]}
              >
                <Select placeholder="Pending" defaultValue="pending         ">
                  <Option value="pending">Pending</Option>
                  <Option value="passed">Passed</Option>
                  <Option value="resheduled">Resheduled</Option>
                  <Option value="missed">Missed</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="appointmentTime"
                label="Appointment Time"
                rules={[{ required: true }]}
              >
                <TimePicker defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")} />
              </Form.Item>
            </Space>
          </Space>

          <Space className="formSection" direction="vertical">
            <h4>Appointment information</h4>
            <Space>
              <Form.Item
                name="address"
                label="Address 1"
                rules={[{ required: true }]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                style={{ marginLeft: "50px" }}
                name="city"
                label="City"
                rules={[{ required: true }]}
              >
                <Input placeholder="" />
              </Form.Item>
            </Space>
          </Space>

          <Space className="formSection" direction="vertical">
            <h4>Notes</h4>
            <Space>
              <Form.Item
                name="notesBefore"
                label="Before appointment"
                rules={[{ required: true }]}
              >
                <TextArea />
              </Form.Item>
              <Form.Item
                style={{ marginLeft: "50px" }}
                name="notesAfter"
                label="After appointment"
                rules={[]}
              >
                <TextArea disabled={!initialValues._id && "disabled"} />
              </Form.Item>
            </Space>
          </Space>

          <Form.Item>
            <Space
              style={{
                marginRight: "50px",
                marginTop: "10px",
              }}
              className="btn-container"
            >
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppointmentForm;
