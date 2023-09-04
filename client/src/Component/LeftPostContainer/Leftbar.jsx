import styled from "@emotion/styled";
import { Box } from "@mui/material";

const LeftStyled = styled(Box)`
    width: 30%;
    height: 60vh;
    margin-top: 20px;
    margin-left: 30px;
    background-color: white;
    border-radius:20px;
    display: flex;
    justify-content: center;
`;

const Leftbar = () => {
    return (
        <LeftStyled>
            Support
        </LeftStyled>
    )
}

export default Leftbar;