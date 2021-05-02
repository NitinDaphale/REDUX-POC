import React, { useState } from "react";
import { connect } from "react-redux";

const Dashboard = ({ toDos, addToDo }) => {
  const [toDoItem, setToDoItem] = useState("");

  const onChangeToDoItem = (e) => {
    setToDoItem(e.target.value);
  };

  const onAddClicked = (e) => {
    addToDo(toDoItem);
  };

  return (
    <>
      <input type="text" onChange={onChangeToDoItem} />
      <button onClick={onAddClicked} value="ADD">
        ADD
      </button>
      <br />

      {toDos.map((t, i) => {
        return <div key={i}>{t.name}</div>;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    toDos: state.toDos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (toDoName) => dispatch({ type: "ADD", payload: toDoName })
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
