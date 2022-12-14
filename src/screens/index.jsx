import React from "react";
import { useLoaderData } from "react-router-dom";
import { Head, Link } from "../Router";

export const loader = async () => {
  return "data from loader";
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div>
      <Head title="Home | Demo Template" description="Home | Demo Template" />
      index
      <div>{data}</div>
      <Link to="/about">About</Link>
    </div>
  );
}
