import { Tag } from "antd";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: {
      compare: (a, b) => {
        if (a.name < b.name) return -1;
        if (b.name < a.name) return 1;
        return 0;
      },
    },
  },

  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    sorter: {
      compare: (a, b) => {
        if (a.code < b.code) return -1;
        if (b.code < a.code) return 1;
        return 0;
      },
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: {
      compare: (a, b) => {
        if (a.age < b.age) return -1;
        if (b.age < a.age) return 1;
        return 0;
      },
    },
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sorter: {
      compare: (a, b) => {
        if (a.address < b.address) return -1;
        if (b.address < a.address) return 1;
        return 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    sorter: {
      compare: (a, b) => {
        if (a.phone < b.phone) return -1;
        if (b.phone < a.phone) return 1;
        return 0;
      },
    },
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
    sorter: {
      compare: (a, b) => {
        if (a.status < b.status) return -1;
        if (b.status < a.status) return 1;
        return 0;
      },
    },
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
