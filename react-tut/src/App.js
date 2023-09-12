import "./App.css";
import Header from "./Component/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import Fields from "./Component/Fields";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data,setData] = useState([]);
  
  function dataClick(){
    setData([... data, {name,email}])
    setName('');
    setEmail('');
  }
  function dataDelete(index){
    let arr = data;
    arr.splice(index,1);
    setData([...arr])
  }
  return (
    <div className="App">
      <Header />

      <div className="txtField">
        <Stack direction="row" spacing={2}>
          <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={dataClick} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
          <div className="data_val">
              <h4>Name</h4>
              <h4>Email</h4>
              <h4>Remove</h4>
          </div>
          {
            data.map((element,index)=>{
              return(
                <div className='data_val'>
                    <h4>{element.name}</h4>
                    <h4>{element.email}</h4>
                    <h4>
                    <Button onClick={() => dataDelete(index)} variant="outlined" color="error">
                        <AutoDeleteIcon/>
                    </Button>
                    </h4>
              </div>
              )
            })
          }
      </div>
    </div>
  );
}

export default App;
