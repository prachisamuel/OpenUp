import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import { Link } from "react-router-dom";
import {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';

//api
import {Datacontext} from "../../context/DataProvider";
import { authenticateLogin } from "../../services/api";

const MainContainerForSignup = styled(Box)`
    background-color: #f0f2f5;
    height: 100vh;
`;

const SubMainContainer = styled(Box)`
    display: flex;
    align-items: center;
    padding-top: 100px;
`;

const AppInfo = styled(Box)`
    flex: 1;
    margin-left: 150px;
    margin-bottom: 170px;
`;

const SignupInfo = styled(Box)`
    flex: 3;
`;

const TextFieldContainer1 = styled(Box)`
    display: flex;
    margin-left: 30%;
    width: 40%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const TextFieldContainer2 = styled(Box)`
    display: flex;
    margin-left: 30%;
    width: 40%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const BtnForSignup = styled(Box)`
    margin-left: 30%;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    width: 41%;
    text-align: center;
`;
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #000000;
    text-decoration: none;
`;
const loginInitialValues = {
    username: '',
    password: ''
};
export default function Login() {
    const navigate = useNavigate();
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ error, showError] = useState(false);
    const {account,setAccount} = useContext(Datacontext);
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            setAccount(login.username);
            navigate('/');
        }
    }
    return (
        <MainContainerForSignup>
            <SubMainContainer>
                <AppInfo>
                    <Component to='/'>
                        <Typography style={{fontSize: '40px', alignItems: 'center', paddingTop: '200px', paddingBottom: '35px', marginLeft: '30px'}}>OpenUp</Typography>
                    </Component>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '-40px'}}>Connect with each other</Typography>
                </AppInfo>
                <SignupInfo>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '10px', marginLeft: '30%'}}>Login Account</Typography>
                    <TextFieldContainer1>
                        <TextField placeholder="Enter username" onChange={(e) => onValueChange(e)} name="username" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer1>
                    <TextFieldContainer2>
                        <TextField placeholder="Enter password" onChange={(e) => onValueChange(e)} name="password" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer2>
                    <BtnForSignup onClick={() => loginUser()}>Login</BtnForSignup>
                    <Link to={"/"}>
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%', marginTop: '5px'}}>Forget password</Typography>
                    </Link>
                    <Link to={"/signup"}>
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%', marginTop: '5px'}}>Create New Account</Typography>
                    </Link>
                </SignupInfo>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}