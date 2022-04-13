import React from "react";

interface ContainerProps {
  idNumber: any;
  name: string;
  gender: string;
  risk: string;
  hairLength: string;
  iq: string;
  admissionDate: string;
  lastBreakdown: string;
  yearlyFee: string;
  know: string;
}

const TableHeader: React.FC<ContainerProps> = ({
  idNumber,
  name,
  gender,
  risk,
  hairLength,
  iq,
  admissionDate,
  lastBreakdown,
  yearlyFee,
  know,
}) => {
  return (
    <tr
      style={{
        textAlign: "left",
        backgroundColor: "#dee2e6",
        borderTop: "1px solid #adb5bd",
        borderBottom: "1px solid #adb5bd",
      }}
    >
      <th style={{ width: "10%", padding: "20px 0" }}></th>

      <th style={{ width: "25%", padding: "20px 0" }}>{idNumber}</th>
      <th style={{ width: "10%", padding: "20px 0" }}>{name}</th>
      <th style={{ width: "10%", padding: "20px 0" }}>{gender}</th>
      <th style={{ width: "20%", padding: "20px 0" }}>{risk}</th>
      <th style={{ width: "20%", padding: "20px 0" }}>{hairLength}</th>
      <th style={{ width: "10%", padding: "20px 0" }}>{iq}</th>
      <th style={{ width: "40%", padding: "20px 0" }}>{admissionDate}</th>
      <th style={{ width: "35%", padding: "20px 0" }}>{lastBreakdown}</th>
      <th style={{ width: "15%", padding: "20px 0" }}>{yearlyFee}</th>
      <th style={{ width: "20%", padding: "20px 0" }}>{know}</th>

      <th style={{ width: "10%", padding: "20px 0" }}></th>
    </tr>
  );
};

export default TableHeader;
