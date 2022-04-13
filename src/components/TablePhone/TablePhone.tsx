import React from "react";

interface ContainerProps {
  phoneId: string;
  relativeId: string;
  phone: string;
  handleClick: any;
  has_kids: boolean;
  removeBtn: any;
}

const TablePhone: React.FC<ContainerProps> = ({
  phoneId,
  relativeId,
  phone,
  handleClick,
  has_kids,
  removeBtn,
}) => {
  return (
    <>
      <tr
        className="show phone-table"
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
              }}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          ) : null}
        </td>
        <td className="padding-20">{phoneId}</td>
        <td className="padding-20">{relativeId}</td>
        <td className="padding-20">{phone}</td>
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

export default TablePhone;
