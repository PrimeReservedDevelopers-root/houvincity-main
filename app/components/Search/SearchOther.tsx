import React from "react";

function SearchOther() {
  return (
      <div className=" flex lg:hidden">
        <div className="w-[80%] bg-[#F1F1F1] p-2 ">
          <div>
            <p>Property type, Location or Price</p>
            <button className="text-xs">Search</button>
          </div>
        </div>
      </div>
  );
}

export default SearchOther;
