import React from "react";

interface ContainerProps {
  relativeId: string;
  patientId: string;
  isAlive: string;
  frequency: string;
}

const TableRelativesHeader: React.FC<ContainerProps> = ({
  relativeId,
  patientId,
  isAlive,
  frequency,
}) => {
  return (
    <>
      <tr
        style={{
          backgroundColor: "#dee2e6",
          borderTop: "1px solid #adb5bd",
          borderBottom: "1px solid #adb5bd",
          textAlign: "left",
        }}
      >
        <th style={{ width: "15%", padding: "20px 0" }}></th>

        <th style={{ width: "15%", padding: "20px 0" }}>{relativeId}</th>
        <th style={{ width: "15%", padding: "20px 0" }}>{patientId}</th>
        <th style={{ width: "15%", padding: "20px 0" }}>{isAlive}</th>
        <th style={{ width: "15%", padding: "20px 0" }}>{frequency}</th>

        <th style={{ width: "25%", padding: "20px 0" }}></th>
      </tr>
    </>
  );
};

export default TableRelativesHeader;
