import React from "react";
import { useParams } from "react-router";

export default function MovieShow() {
  const { id } = useParams();
  console.log(id);

  return <div>{id}</div>;
}
