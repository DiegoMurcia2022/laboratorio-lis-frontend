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
import axios from "axios";
import { useRef, useState } from "react";
import cltechLogo from "../images/cltech.png";

function Home() {
  const [patients, setPatients] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const inputFile = useRef(null);

  function uploadTextData() {
    var newMessage = encodeURIComponent(message);

    axios.post(
      `https://laboratorio-lis-backend.herokuapp.com/api/v1/laboratory-lis?data=${newMessage}`
    );

    setMessage("");
  }

  function changeHandler(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleSubmission() {
    const formData = new FormData();

    formData.append("file", selectedFile);

    axios.post(
      "https://laboratorio-lis-backend.herokuapp.com/api/v1/laboratory-lis/upload-file",
      formData,
      { headers: {"Content-Type": "multipart/form-data"} }
    );

    inputFile.current.value = "";
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
          <TextField type="file" inputRef={inputFile} onChange={changeHandler} />
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ padding: "15px 4px" }} onClick={handleSubmission}>
            Subir Archivo
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
