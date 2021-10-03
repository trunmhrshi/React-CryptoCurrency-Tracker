import React, { useState, useEffect } from "react";
import RowHeading from "./RowHeading";

const App = () => {
  const [price, setPrice] = useState([]);
  const [search, setSearch] = useState("");

  const PriceTracker = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const apiData = await res.json();
    console.log(apiData);
    setPrice(apiData);
  };

  useEffect(() => {
    PriceTracker();
  }, []);

  const searchHandler = price.filter((currency) => {
    return currency.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="container text-center">
        <h1 className="my-3" style={{fontFamily:"sans-serif"}}>Currency Tracker</h1>

        <input
          type="text"
          placeholder="Search a currency..."
          onChange={(e) => setSearch(e.target.value)}
          className="text-center my-3 btn btn-outline-Secondary btn"
          style={{ color: "black",border: "2px solid powderblue" }}
        />
        <div style={{ height: "550px", overflow: "scroll" }}>
          <table className="table table-striped">
            <RowHeading />

            {searchHandler.map((val) => {
              return (
                <tbody>
                  <>
                  <td>
                      <img
                        src={val.image}
                        style={{ width: "25px" }}
                        alt="currecny"
                      /> {val.symbol}
                    </td>
                    <td>{val.name}</td>
                    <td> ₹ {val.current_price}</td>
                    <td>{val.market_cap_rank}</td>
                    </>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
