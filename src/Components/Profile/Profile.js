import React from "react";
import "./Profile.scss";
const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <figure className="snip0057 red hover">
        <figcaption>
          <h2>
            Victoria <span>Pena</span>
          </h2>
          <p>
            A voice crackles in Calvin's radio: "Enemy fighters at two o'clock!"
            "Roger. What should I do until then?"
          </p>
        </figcaption>
        <div className="image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg"
            alt="sample4"
          />
        </div>
        <div className="position">Illustrator</div>
      </figure>
      <button
        style={{
          padding: "1rem 2.5rem",
          textTransform: "uppercase",
          backgroundColor: "aquamarine",
          borderRadius: "20rem",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Profile;
