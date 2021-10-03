import React from "react";
import HeadingData from "./HeadingData";

function RowHeading(props) {
  return (
    <>
      <thead className="thead-light sticky-top">
        <tr>
          {HeadingData.map((val) => {
            return (
              <>
                <th>{val.logo}</th>
                <th>{val.name}</th>
                <th>{val.price}</th>
                <th>{val.rank}</th>
              </>
            );
          })}
        </tr>
      </thead>
    </>
  );
}

export default RowHeading;
