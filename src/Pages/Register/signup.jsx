import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';

const MainContainerForSignup = styled(Box)`
    background-color: #f0f2f5;
    height: 100vh;
`;

const SubMainContainer = styled(Box)`
    display: flex;
    align-items: center;
    padding-top: 200px;
`;

const TextFieldContainer = styled(Box)`
    display: flex;
    align-items: center;
    padding-top: 200px;
`;

export default function Signup() {
    return (
        <MainContainerForSignup>
            <SubMainContainer>
                <>
                    <Typography style={{fontSize: '40px', alignItems: center, paddingTop: '200px'}}>OpenUp</Typography>
                    <Typography style={{fontSize: '20px', textAlign: start, marginTop: '-40px'}}>Connect with each other</Typography>
                </>
                <>
                    <Typography style={{fontSize: '20px', textAlign: start, marginTop: '10px', marginLeft: '30%'}}>Create New Account</Typography>
                    <TextFieldContainer>
                        <TextField placeholder="Phone Number" />
                        <TextField placeholder="******" />
                    </TextFieldContainer>
                    <BtnForSignup>Signup</BtnForSignup>
                    <p>Already have a account</p>
                </>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}