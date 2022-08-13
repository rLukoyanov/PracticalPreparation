import React from "react";
import Company from "./Company";

export default function Users({ companies = [] }) {
  return (
    <ul>
      {companies.map((company, index) => (
        <Company company={company} key={index} id={index} />
      ))}
    </ul>
  );
}
