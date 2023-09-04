import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import { Link } from "react-router-dom";

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

export default function Signup() {
    return (
        <MainContainerForSignup>
            <SubMainContainer>
                <AppInfo>
                    <Typography style={{fontSize: '40px', alignItems: 'center', paddingTop: '200px', paddingBottom: '35px', marginLeft: '30px'}}>OpenUp</Typography>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '-40px'}}>Connect with each other</Typography>
                </AppInfo>
                <SignupInfo>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '10px', marginLeft: '30%'}}>Create New Account</Typography>
                    <TextFieldContainer1>
                        <TextField placeholder="Enter Your Phone Number" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer1>
                    <TextFieldContainer2>
                        <TextField placeholder="Set Password" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}}/>
                    </TextFieldContainer2>
                    <BtnForSignup>Signup</BtnForSignup>
                    <Link to={"/"}>
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%'}}>Already have a account</Typography>
                    </Link>
                </SignupInfo>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}