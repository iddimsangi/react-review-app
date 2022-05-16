import React from "react";
import Prof from "../../../Assets/img/prof.jpg";
import "./SingleListsCard.scss";
const SingleListCard = () => {
  return (
    <div className="card">
      <article className="leaderboard">
        <main className="leaderboard__profiles">
          <article className="leaderboard__profile">
            <img
              src={Prof}
              alt="Dustin Moskovitz"
              className="leaderboard__picture"
            />
            <span className="leaderboard__name">Dustin Moskovitz</span>
            <span className="leaderboard__value">
              <a href="#" className="btn btn-del">
                delete
              </a>
              <a href="#" className="btn btn-edit">
                edit
              </a>
            </span>
          </article>
        </main>
      </article>
    </div>
  );
};

export default SingleListCard;
