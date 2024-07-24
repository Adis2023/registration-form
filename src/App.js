
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import Footer from './Footer';
import Nav from './Nav.js';




function App() {
  return (
    <>
      {/* <Navbar/> */}
    <div className="App">
        <Nav/>
      <h1>Registration Form</h1>
      <TextField id="outlined-basic" label="Fisrt Name" variant="outlined" />
      <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
      <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Date Of Birth" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />

      <Button variant="contained">Submit</Button>
      <Footer/>
    </div></>
  );
}

export default App;
