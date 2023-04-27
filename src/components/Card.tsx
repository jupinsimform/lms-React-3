import React from "react";

interface MessageProps {
  children: JSX.Element | JSX.Element[];
}
function Card({ children }: MessageProps) {
  return (
    <>
      <div className="container">
        <div className="card">{children}</div>
      </div>
    </>
  );
}

export default Card;
