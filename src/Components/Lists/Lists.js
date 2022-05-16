import React from "react";
import "./Lists.scss";
import SingleListCard from "./SingleList/SingleListCard";
const Lists = () => {
  return (
    <div className="Lists">
      <form id="standard" method="get" action="">
        <input type="text" class="search-txt-input" name="q" maxlength="100" />
        <input type="submit" value="search" class="search-button" />
      </form>
      <SingleListCard />
      <SingleListCard />
      <SingleListCard />
    </div>
  );
};

export default Lists;
