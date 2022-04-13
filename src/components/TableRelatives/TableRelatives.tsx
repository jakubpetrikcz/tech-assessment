import React from "react";

interface ContainerProps {
  relativeId: string;
  patientId: string;
  isAlive: string;
  frequency: string;
  handleClick: any;
  has_kids: boolean;
  isOpen: any;
  removeBtn: any;
}

const TableRelatives: React.FC<ContainerProps> = ({
  relativeId,
  patientId,
  isAlive,
  frequency,
  handleClick,
  has_kids,
  isOpen,
  removeBtn,
}) => {
  return (
    <>
      <tr
        className="show relatives-table"
        style={{
          borderTop: "1px solid #adb5bd",
          borderBottom: "1px solid #adb5bd",
        }}
      >
        <td className="hide" style={{ padding: "20px 0" }}>
          {has_kids ? (
            <button
              onClick={handleClick}
              style={{
                border: "none",
                background: "transparent",
                fontSize: "20px",
              }}
            >
              <i className={isOpen}></i>
            </button>
          ) : null}
        </td>

        <td className="padding-20">{relativeId}</td>
        <td className="padding-20">{patientId}</td>
        <td className="padding-20">{isAlive}</td>
        <td className="padding-20">{frequency}</td>
        <td
          className="hide"
          style={{ padding: "20px 0", textAlign: "end", paddingRight: "20px" }}
        >
          <button
            onClick={removeBtn}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "20px",
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRelatives;
