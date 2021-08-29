import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { SearchOutlined } from "@material-ui/icons";

const ViewButton: React.FC<{ title: string; type: string }> = ({
  title,
  type,
}) => {
  return (
    <button className={`viewButton ${type}`}>
      {title}{" "}
      {type === "viewButton__find" ? (
        <SearchOutlined className="viewButton__find-icon" />
      ) : (
        <ChevronRightIcon />
      )}
    </button>
  );
};

export default ViewButton;
