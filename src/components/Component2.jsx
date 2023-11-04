/* eslint-disable react/prop-types */
import { useState } from "react";
import folderData from "../data/data";

const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const updateExpand = () => setExpand((prev) => !prev);
  if (data.isFolder) {
    return (
      <>
        <div
          onClick={updateExpand}
          style={{ cursor: "pointer", border: "1px solid gray" }}
        >
          {data.name}
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "80px" }}
        >
          {data.structure?.map((pattern) => {
            return <Folder key={pattern.name} data={pattern} />;
          })}
        </div>
      </>
    );
  }
  return <div>{data.name}</div>;
};

export const Component2 = () => {
  //   console.log(data);
  return <Folder data={folderData} />;
};
