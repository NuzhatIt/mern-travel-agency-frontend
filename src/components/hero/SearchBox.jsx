import React, { useState } from "react";
import { Table, Tooltip, Popover, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const SearchBox = () => {
  const columns = [
    {
      // title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      // title: "Name",
      dataIndex: "plus",
      key: "plus",
      render: (_, row) => (
        <Button
          icon={<PlusOutlined></PlusOutlined>}
          size={"small"}
          // style={{ display: "contents" }}
          onClick={() => updateData(row.key, 1)}
        ></Button>
      ),
    },
    {
      // title: "Age",
      dataIndex: "seat",
      key: "age",
    },
    {
      // title: "Name",
      dataIndex: "minus",
      key: "minus",
      render: (_, row) => (
        <Button
          icon={<MinusOutlined></MinusOutlined>}
          size={"small"}
          // style={{ display: "contents" }}
          block
          onClick={() => updateData(row.key, -1)}
        ></Button>
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: "1",
      name: "Adult",
      seat: 0,
    },
    {
      key: "2",
      name: "Children",
      seat: 0,
    },
    {
      key: "3",
      name: "Others",
      seat: 0,
    },
  ]);
  const updateData = (rowNo, action) => {
    const updatedData = data.map((rowdata) =>
      rowdata.key === rowNo
        ? { ...rowdata, seat: rowdata.seat + action }
        : rowdata
    );
    setData(updatedData);
  };
  // const data = [
  //   {
  //     key: "1",
  //     name: "Adult",
  //     plus: "",
  //     seatNo: seatNumber[],
  //     minus: "",
  //   },
  //   {
  //     key: "2",
  //     name: "Children",
  //     plus: "",
  //     age: 32,
  //     minus: "",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     plus: "",
  //     age: 32,
  //     minus: "",
  //   },
  // ];
  const content = (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader={false}
      />
    </div>
  );
  const [open, setOpen] = useState(false);
  // const hide = () => {
  //   setOpen(false);
  // };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      placement="bottomLeft"
      // title={"ddd"}
      content={content}
      open={open}
      onOpenChange={handleOpenChange}
      trigger="click"
    >
      <Button>BL</Button>
    </Popover>
  );
};

export default SearchBox;
