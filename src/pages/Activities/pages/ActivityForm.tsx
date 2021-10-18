import React from "react";
import Main from "../../../components/Main";
import ActivityData from "../Components/ActivityData";
import AtendeeTable from "../Components/AtendeeTable";

const ActivityForm = (): JSX.Element => {
  return (
    <div>
      <Main />
      <div
            style={{
            width: "50%",
            marginLeft: "25%",
          }}
      >
        <ActivityData />
        <p
          style={{
          marginTop: "5%",
          }}
        >Adcionar Alunos</p>
        <AtendeeTable />
      </div>
    </div>
  );
};

export default ActivityForm;
