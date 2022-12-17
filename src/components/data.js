import { Tag } from "antd";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name - b.name,
  },

  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    sorter: (a, b) => a.code - b.code,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address - b.address,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.phone - b.phone,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={getColor(status)} key={status}>
        {status}
      </Tag>
    ),
    sorter: (a, b) => a.status - b.status,
  },
];

const getColor = (status) => {
  if (status === "missed") {
    return "volcano";
  } else if (status === "passed") {
    return "green";
  } else if (status === "resheduled") {
    return "yellow";
  } else if (status === "pending") {
    return "blue";
  }
};

