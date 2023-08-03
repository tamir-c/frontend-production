import React from "react";

const HeaderTitle = ({ title }) => {
  return (
    <h1 className="text-2xl xl:text-3xl drop-shadow-xl text-slate-500">
      {title}
    </h1>
  );
};

export default HeaderTitle;
