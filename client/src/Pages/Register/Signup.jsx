import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import { Link } from "react-router-dom";
import {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';

// call apis
import { authenticateSignup } from "../../services/api";
import {Datacontext} from "../../context/DataProvider";

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
const signupInitialValues = {
    phone: '',
    password: '',
    username: '',
    color: '',
    birthdate: ''

}
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #000000;
    text-decoration: none;
`;
export default function Signup() {
    
    const {account,setAccount} = useContext(Datacontext);
    const [ signup, setSignup ] = useState(signupInitialValues);

    const onValueChange = (e) => {
        //fetching values from event e that is passed by textfields
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }
    const navigate = useNavigate();
    const signupuser = async () =>{
        //call for api
        let response = await authenticateSignup(signup);
        if(!response)
            return;
        setAccount(signup.username);
        navigate('/');
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
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '10px', marginLeft: '30%'}}>Create New Account</Typography>
                    <TextFieldContainer1>
                        <TextField placeholder="Enter Your Phone Number" onChange={(e) => onValueChange(e)} name='phone' fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer1>
                    <TextFieldContainer2>
                        <TextField placeholder="Set Password" onChange={(e) => onValueChange(e)} name='password' fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer2>
                    <TextFieldContainer2>
                        <TextField placeholder="Set username" onChange={(e) => onValueChange(e)} name='username' fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer2>
                    <TextFieldContainer2>
                        <TextField placeholder="Set color" onChange={(e) => onValueChange(e)}  name='color' fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer2>
                    <TextFieldContainer2>
                        <TextField placeholder="Set date of birth" onChange={(e) => onValueChange(e)} name='birthdate' fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer2>
                    <BtnForSignup onClick={() => signupuser()}>Signup</BtnForSignup>
                    
                    <Link to={"/login"}>
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%'}}>Already have a account</Typography>
                    </Link>
                </SignupInfo>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}