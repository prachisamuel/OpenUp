import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import profileimage from '../../Pages/Profile/profileimage.png';

const ContentUploadContainer = styled(Box)`
    width: 94%;
    background-color: white;
    height: 20vh;
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
`;

const Content = styled(Box)`
    display: flex;
    align-items: center;
    margin: 10px;
`;

const TextFieldContainer = styled(Box)`
    width: 100%;
    margin: 0 20px;
`;

const StyledButton = styled(Button)`
    
    display: flex;
    background: #728FCE;
    color: #fff;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    align-items: center;
`;

export default function ContentPost() {
    return (
        <ContentUploadContainer>
            <Content>
                <img src={`${profileimage}`} alt="" style={{width: 40, height: 40, borderRadius: 50}} />
                <TextFieldContainer>
                    <TextField fullWidth id="outlined-textarea" placeholder="What's on your mind" size="small" multiline maxRows={5} sx={{border: 'none', "& fieldset": { border: 'none' },}} />
                </TextFieldContainer>
                <StyledButton variant="contained">Post</StyledButton>
            </Content>
        </ContentUploadContainer>
    )
}