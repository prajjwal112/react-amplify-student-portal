import {React, useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import './LoginPage.css';

const LoginPage=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        fetch("http://localhost:8000/message")
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, []);
    return(
        <div className="Container">
            <h2>Login Page</h2>
            <form >
                <Box>
                    <TextField id="standard-basic" label="Username" variant="standard" value={username}
                    onChange={(event)=>setUsername(event.target.value)} />
                </Box>
                <Box>
                    <TextField id="standard-basic" label="Password" variant="standard" value={password}
                    onChange={(event)=>setPassword(event.target.value)} />
                </Box>
                <br/>
                <Button variant="contained">Login</Button>
            </form>
        </div>
    )
}
export default LoginPage;