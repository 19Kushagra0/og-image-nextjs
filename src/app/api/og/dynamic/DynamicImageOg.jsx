import React from "react";

export default function DynamicImageOg({ groupName }) {
  return (
    <div
      className="dynamic"
      style={{
        width: "1200px",
        height: "630px",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        fontSize: "100px",
        fontWeight: 700,
        color: "#111",
        border: "2px solid #e5e7eb",
        borderRadius: "20px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {groupName}
    </div>
  );
}
