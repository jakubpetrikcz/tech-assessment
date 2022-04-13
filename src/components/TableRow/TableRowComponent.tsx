import React from "react";

interface ContainerProps {
  idNumber: number;
  name: string;
  gender: string;
  risk: string;
  hairLength: number;
  iq: number;
  admissionDate: string;
  lastBreakdown: string;
  yearlyFee: number;
  know: boolean;
  handleClick: any;
  has_relatives: boolean;
  isOpen: any;
  removeBtn: any;
}

const TableRow: React.FC<ContainerProps> = ({
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
  handleClick,
  has_relatives,
  isOpen,
  removeBtn,
}) => {
  return (
    <>
      <tr
        style={{
          borderTop: "1px solid #adb5bd",
          borderBottom: "1px solid #adb5bd",
        }}
      >
        <td className="hide" style={{ padding: "20px 0" }}>
          {has_relatives ? (
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
        <td className="padding-20">{idNumber}</td>
        <td className="padding-20">{name}</td>
        <td className="padding-20">{gender}</td>
        <td className="padding-20">{risk}</td>
        <td className="padding-20">{hairLength}</td>
        <td className="padding-20">{iq}</td>
        <td className="padding-20">{admissionDate}</td>
        <td className="padding-20">{lastBreakdown}</td>
        <td className="padding-20">{yearlyFee}</td>
        <td className="padding-20">{know}</td>
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

export default TableRow;
