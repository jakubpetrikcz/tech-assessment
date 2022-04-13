import React from "react";

interface ContainerProps {
  phoneId: string;
  relativeId: string;
  phone: string;
}

const TablePhoneHeader: React.FC<ContainerProps> = ({
  phoneId,
  relativeId,
  phone,
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
        <th style={{ width: "5%", padding: "20px 0" }}></th>

        <th style={{ width: "25%", padding: "20px 0" }}>{phoneId}</th>
        <th style={{ width: "30%", padding: "20px 0" }}>{relativeId}</th>
        <th style={{ width: "25%", padding: "20px 0" }}>{phone}</th>
        <th style={{ width: "25%", padding: "20px 0" }}></th>
      </tr>
    </>
  );
};

export default TablePhoneHeader;
