import {
  Button,
  Grid,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import cltechLogo from "../images/cltech.png";

function Home() {
  const [patients, setPatients] = useState([]);
  const [message, setMessage] = useState("");

  function uploadTextData() {
    var newMessage = encodeURIComponent(message);

    //Code for upload text

    setMessage("");
  }

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        jutifyContent="center"
      >
        <Grid item>
          <img src={cltechLogo} />
        </Grid>
      </Grid>
      <br />
      <Grid container columnSpacing={0.5} justifyContent="center">
        <Grid item>
          <TextField
            variant="outlined"
            label="Datos"
            value={message}
            onChange={(i) => {
              setMessage(i.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{ padding: "15px 4px" }}
            onClick={uploadTextData}
          >
            Registrar
          </Button>
        </Grid>
      </Grid>
      <br />
      <Grid container columnSpacing={0.5} justifyContent="center">
        <Grid item>
          <TextField type={"file"} inputProps={{ accept: "application/txt" }} />
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ padding: "15px 4px" }}>
            Subir Archivo
          </Button>
        </Grid>
      </Grid>
      <br />
      <br />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Apellido</TableCell>
              <TableCell align="center">Genero</TableCell>
              <TableCell align="center">Fecha de Nacimiento</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
