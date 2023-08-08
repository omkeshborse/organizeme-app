import React from "react";

export const AddTask = () => {
  return (
    <section className="addTask">
      <form>
        <input type="text" name="task" autoComplete="off" maxLength="25" placeholder="add task"/>
        <button type="submit">add</button>
      </form>
    </section>
  );
};
