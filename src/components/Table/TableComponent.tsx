import React, { useEffect, useState } from "react";
import TableHeader from "../TableHeader/TableHeaderComponent";
import TablePhone from "../TablePhone/TablePhone";
import TablePhoneHeader from "../TablePhoneHeader/TablePhoneHeader";
import TableRelatives from "../TableRelatives/TableRelatives";
import TableRelativesHeader from "../TableRelativesHeader/TableRelativesHeader";
import TableRow from "../TableRow/TableRowComponent";
import "./TableComponent.scss";

const Table: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [title, setTitle] = useState<any>([]);
  const [titleHasRelatives, setTitleHasRelatives] = useState<any>([]);
  const [open, setOpen] = useState<any>(null);
  const [openRelatives, setOpenRelatives] = useState<any>(null);
  const [openPhone, setOpenPhone] = useState<any>(null);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);

        myJson.map((item: any) => {
          setTitle(Object.keys(item.data));

          item.kids.has_relatives?.records.map((has_relatives: any) => {
            setTitleHasRelatives(Object.keys(has_relatives.data));
          });
        });
      });
  };

  const toggle = (e: any) => {
    open === null ? setOpen(e) : setOpen(null);
  };

  const handleRemoveItem = (e: any) => {
    const updateList = data.map((item: any) => ({
      ...item,
      kids: {
        ...item.kids,
        has_relatives: {
          ...item.kids.has_relatives,
          records: item.kids.has_relatives?.records?.filter(
            (subItem: any, i: number) => {
              return subItem.data["Relative ID"] !== e;
            }
          ),
        },
      },
    }));
    setData(updateList);
  };

  const handleRemoveRow = (e: any) => {
    const newList = data.filter((item: any, i: number) => {
      return item.data["Identification number"] !== e;
    });

    setData(newList);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table
        style={{
          borderCollapse: "collapse",
          tableLayout: "fixed",
          width: "min(100% - 2rem, 115rem)",
          marginInline: "auto",
          marginBlock: "1rem",
        }}
      >
        <tbody>
          <TableHeader
            idNumber={title[0]}
            name={title[1]}
            gender={title[2]}
            risk={title[3]}
            hairLength={title[4]}
            iq={title[5]}
            admissionDate={title[6]}
            lastBreakdown={title[7]}
            yearlyFee={title[8]}
            know={title[9]}
          />
          {data.map((item: any, i: number) => {
            return (
              <>
                <TableRow
                  key={i}
                  idNumber={item.data["Identification number"]}
                  name={item.data["Name"]}
                  gender={item.data["Gender"]}
                  risk={item.data["Risk"]}
                  hairLength={item.data["Hair length"]}
                  iq={item.data["IQ"]}
                  admissionDate={item.data["Admission date"]}
                  lastBreakdown={item.data["Last breakdown"]}
                  yearlyFee={item.data["Yearly fee"]}
                  know={item.data["Knows the Joker?"]}
                  handleClick={() => toggle(item.data["Identification number"])}
                  has_relatives={
                    item.kids.has_relatives?.records !== undefined &&
                    Object.keys(item.kids.has_relatives).length !== 0
                      ? true
                      : false
                  }
                  isOpen={
                    open === item.data["Identification number"]
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-angle-right"
                  }
                  removeBtn={() =>
                    handleRemoveRow(item.data["Identification number"])
                  }
                />

                {item.kids && item.kids.has_relatives !== undefined ? (
                  <>
                    <tr
                      key={i}
                      className={
                        open === item.data["Identification number"]
                          ? "collapse show"
                          : "collapse"
                      }
                      style={{ width: "100%" }}
                    >
                      <td
                        className="show"
                        colSpan={25}
                        style={{ paddingLeft: "20px" }}
                      >
                        <h5>{Object.keys(item.kids)}</h5>
                        {item.kids.has_relatives?.records !== 0 &&
                        item.kids.has_relatives?.records !== undefined ? (
                          <table
                            style={{
                              borderCollapse: "collapse",
                              tableLayout: "fixed",
                              width: "100%",
                              marginBottom: "20px",
                            }}
                          >
                            <tbody>
                              <TableRelativesHeader
                                relativeId={titleHasRelatives[0]}
                                patientId={titleHasRelatives[1]}
                                isAlive={titleHasRelatives[2]}
                                frequency={titleHasRelatives[3]}
                              />

                              {item.kids.has_relatives?.records?.map(
                                (relatives: any, i: number) => {
                                  return (
                                    <>
                                      <TableRelatives
                                        relativeId={
                                          relatives.data["Relative ID"]
                                        }
                                        patientId={relatives.data["Patient ID"]}
                                        isAlive={relatives.data["Is alive?"]}
                                        frequency={
                                          relatives.data["Frequency of visits"]
                                        }
                                        handleClick={() => {
                                          openRelatives === null
                                            ? setOpenRelatives(
                                                relatives.data["Relative ID"]
                                              )
                                            : setOpenRelatives(null);
                                        }}
                                        has_kids={
                                          Object.keys(relatives.kids).length !==
                                          0
                                            ? true
                                            : false
                                        }
                                        isOpen={
                                          openRelatives ===
                                          relatives.data["Relative ID"]
                                            ? "fa-solid fa-angle-down"
                                            : "fa-solid fa-angle-right"
                                        }
                                        removeBtn={() =>
                                          handleRemoveItem(
                                            relatives.data["Relative ID"]
                                          )
                                        }
                                      />

                                      {relatives.kids.has_phone !==
                                      undefined ? (
                                        <tr
                                          key={i}
                                          className={
                                            openRelatives ===
                                            relatives.data["Relative ID"]
                                              ? "collapse show"
                                              : "collapse"
                                          }
                                          style={{ width: "100%" }}
                                        >
                                          <td
                                            className="show"
                                            colSpan={25}
                                            style={{ paddingLeft: "20px" }}
                                          >
                                            <h5>
                                              {Object.keys(relatives.kids)}
                                            </h5>
                                            <table
                                              style={{
                                                borderCollapse: "collapse",
                                                tableLayout: "fixed",
                                                width: "100%",
                                                marginBottom: "20px",
                                              }}
                                            >
                                              <tbody>
                                                <TablePhoneHeader
                                                  phoneId={
                                                    Object.keys(
                                                      relatives.kids.has_phone
                                                        .records[0].data
                                                    )[0]
                                                  }
                                                  relativeId={
                                                    Object.keys(
                                                      relatives.kids.has_phone
                                                        .records[0].data
                                                    )[1]
                                                  }
                                                  phone={
                                                    Object.keys(
                                                      relatives.kids.has_phone
                                                        .records[0].data
                                                    )[2]
                                                  }
                                                />
                                                {relatives.kids.has_phone.records.map(
                                                  (phone: any, i: number) => {
                                                    return (
                                                      <>
                                                        <TablePhone
                                                          key={i}
                                                          phoneId={
                                                            phone.data[
                                                              "Phone ID"
                                                            ]
                                                          }
                                                          relativeId={
                                                            phone.data[
                                                              "ID of the relative"
                                                            ]
                                                          }
                                                          phone={
                                                            phone.data["Phone"]
                                                          }
                                                          handleClick={() => {
                                                            openPhone === null
                                                              ? setOpenPhone(
                                                                  phone.data[
                                                                    "ID of the relative"
                                                                  ]
                                                                )
                                                              : setOpenPhone(
                                                                  null
                                                                );
                                                          }}
                                                          has_kids={
                                                            Object.keys(
                                                              phone.kids
                                                            ).length !== 0
                                                              ? true
                                                              : false
                                                          }
                                                          removeBtn={() =>
                                                            handleRemoveItem(
                                                              phone.data[
                                                                "Phone ID"
                                                              ]
                                                            )
                                                          }
                                                        />
                                                      </>
                                                    );
                                                  }
                                                )}
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      ) : null}
                                    </>
                                  );
                                }
                              )}
                            </tbody>
                          </table>
                        ) : null}
                      </td>
                    </tr>
                  </>
                ) : null}
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
