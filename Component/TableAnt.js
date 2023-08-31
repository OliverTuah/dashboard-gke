import React from "react";
import { Table } from "antd";
import "@/styles/table.css";

const data = [
  {
    name: "Pantek",
    category: "Bantuan",
    date: "15-07-2023",
    amount: "Rp2.000.000",
  },
  {
    name: "Joko",
    category: "Bantuan",
    date: "15-07-2023",
    amount: "Rp2.000.000",
  },
  {
    name: "Santoso",
    category: "Bantuan",
    date: "15-07-2023",
    amount: "Rp2.000.000",
  },
  {
    name: "Kadek",
    category: "Bantuan",
    date: "15-07-2023",
    amount: "Rp2.000.000",
  },
];

const columns = [
  {
    title: "Nama",
    dataIndex: "name",
    filters: data.reduce((filterOptions, record) => {
      const exists = filterOptions.some(
        (option) => option.value === record.name
      );
      if (!exists) {
        filterOptions.push({
          text: record.name,
          value: record.name,
        });
      }

      return filterOptions;
    }, []),
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "30%",
  },
  {
    title: "Kategori",
    dataIndex: "category",
    sorter: (a, b) => a.kategori - b.kategori,
  },
  {
    title: "Tanggal",
    dataIndex: "date",
    sorter: (a, b) => a.tanggal - b.tanggal,
  },
  {
    title: "Jumlah (Rp)",
    dataIndex: "amount",
    sorter: (a, b) => a.jumlah - b.jumlah,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const App = () => (
  <Table
    className="table-laporan"
    columns={columns}
    dataSource={data}
    onChange={onChange}
  />
);
export default App;
