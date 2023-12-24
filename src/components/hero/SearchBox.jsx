import { MinusOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Popover, Table } from "antd";
import React, { useState } from "react";
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
          className="seach-box"
          disabled={totalSeat[0] >= seatLimit}
          icon={<PlusOutlined />}
          size={"middle"}
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
          className="seach-box"
          // style={{ margin: "5px" }}
          disabled={row.key === "1" ? row.seat <= 1 : row.seat <= 0}
          icon={<MinusOutlined />}
          size={"middle"}
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
    // console.log(totalSeat[0]);
  };

  const content = (
    <div>
      <Table
        className="search-box"
        style={{ width: "350px" }}
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
        size=""
        style={{
          // height: "50px",
          width: "100%",
        }}
        icon={<UserOutlined />}
      >{`${totalSeat} Person`}</Button>
    </Popover>
  );
};

export default SearchBox;
