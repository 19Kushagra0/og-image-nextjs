import React from "react";
import "@/app/myComponents/dynamicImage/DynamicImage.css";
export default function DynamicImage({ groupName }) {
  return <div className="dynamic">{groupName}</div>;
}
