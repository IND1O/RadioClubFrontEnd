import React from "react";

const Message = ({ msg, bgColor }) => {
  let style = {
    padding: "1rem",
    marginBotton: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };

  return (
    <div style={style}>
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
