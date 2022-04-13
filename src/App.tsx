import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/TableComponent";
import TableHeader from "./components/TableHeader/TableHeaderComponent";
import Data from "./data.json";

const App: React.FC = () => {
  // useEffect(() => {
  //   console.log(Data);
  // }, []);

  return (
    <div className="App">
      <Table />
    </div>
  );
};

export default App;
