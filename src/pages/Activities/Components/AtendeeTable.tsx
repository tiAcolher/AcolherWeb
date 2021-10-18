import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { makeStyles, Theme, createStyles, MenuItem, Select, FormLabel } from "@material-ui/core";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Nome", width: 455.5 },
];

const rows = [
  { id: 1, name: "Jon Snow" },
  { id: 2, name: "Cersei Lannister" },
  { id: 3, name: "Jaime Lannister" },
  { id: 4, name: "Arya Stark" },
  { id: 5, name: "Daenerys Targaryen" },
  { id: 6, name: "Melisandre" },
  { id: 7, name: "Ferrara Clifford" },
  { id: 8, name: "Rossini Frances" },
  { id: 9, name: "Harvey Roxie" },
];

const mockPartnerList = [
    {
      name: "Marcela",
    },
    {
        name: "Silas",
    },
    {
      name: "Felipe",
    },
    {
      name: "Maria",
    },
    {
      name: "Juliana",
    },
];

export default function AtendeeTable() {
    const classes = useStyles();
    const [aluno, setAluno] = useState("");
    return (
            <><div><FormLabel className={classes.label}>Selecionar Alunos</FormLabel><Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={aluno}
            onChange={(event: any) => {
                setAluno(event.target.value);
            } }
            className={classes.select}
        >
            {mockPartnerList.map((item) => (
                <MenuItem value={item.name} key={item.name}>
                    {item.name}
                </MenuItem>
            ))}
        </Select>
            {/* TODO : CRIAR BOTAO DE ADCIONAR NA TABELA */}
        </div>            
           <div className={classes.input}>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]} />
            </div></>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
          height: 390,
          width: "72%",

          marginTop:"2%"
      },
      label: {
          marginTop: "1%",

      },
      select: {
          width: "30%",
          marginTop:"2%",
          marginLeft: "2%",
      }
  })
);