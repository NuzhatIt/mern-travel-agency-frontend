import React, { useState } from "react";
import { Table, Popover, Button } from "antd";
import { PlusOutlined, MinusOutlined, UserOutlined } from "@ant-design/icons";
const totalSeat = [1];
const seatLimit = 7;
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
          disabled={totalSeat[0] >= seatLimit}
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
          disabled={row.key === "1" ? row.seat <= 1 : row.seat <= 0}
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
      name: `Adult (12 years+)`,
      seat: 1,
    },
    {
      key: "2",
      name: `Children (2-12 years)`,
      seat: 0,
    },
    {
      key: "3",
      name: `Infant (below 2 years)`,
      seat: 0,
    },
  ]);

  const updateData = (rowNo, action) => {
    action === 1 ? totalSeat[0]++ : totalSeat[0]--;

    const updatedData = data.map((rowdata) =>
      rowdata.key === rowNo
        ? { ...rowdata, seat: rowdata.seat + action }
        : rowdata
    );

    setData(updatedData);
    console.log(totalSeat[0]);
  };

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
      <Button
        style={{ height: "50px", width: "150px" }}
        icon={<UserOutlined />}
      >{`${totalSeat} Person`}</Button>
    </Popover>
  );
};

export default SearchBox;
