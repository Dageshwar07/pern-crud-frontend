import React, { useState } from "react";

export const Input = () => {
  const [description, setDecription] = useState("i want to clean my");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(() => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className=" text-cener mt-5">Pern todo List</h1>
      <form onSubmit={onSubmitForm} className="d-flex mt-5">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDecription(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </>
  );
};
