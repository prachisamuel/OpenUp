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
    padding-top: 200px;
`;

const AppInfo = styled(Box)`
    flex: 1;
    magrin-left: 150;
    magrin-bottom: 172;
`;

const SignupInfo = styled(Box)`
    flex: 3;
`;

const TextFieldContainer = styled(Box)`
    display: flex;
    margin-left: 30%;
    width: 40%;
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 10px;
`;

const BtnForSignup = styled(Box)`
    margin-left: 2%;
    margin-top: 10px;
    border-radius: 10px;
    padding: 180px;
    padding-right: 202px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
`;

export default function Signup() {
    return (
        <MainContainerForSignup>
            <SubMainContainer>
                <AppInfo>
                    <Typography style={{fontSize: '40px', alignItems: 'center', paddingTop: '200px'}}>OpenUp</Typography>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '-40px'}}>Connect with each other</Typography>
                </AppInfo>
                <SignupInfo>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '10px', marginLeft: '30%'}}>Create New Account</Typography>
                    <TextFieldContainer>
                        <TextField placeholder="Phone Number" />
                        <TextField placeholder="******" />
                    </TextFieldContainer>
                    <BtnForSignup>Signup</BtnForSignup>
                    <Link to={"/"}>
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%'}}>Already have a account</Typography>
                    </Link>
                </SignupInfo>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}