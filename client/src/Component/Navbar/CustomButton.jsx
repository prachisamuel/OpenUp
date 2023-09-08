import   { useState,useContext} from 'react';
import { Box,Button,Typography,styled } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from "@mui/material/IconButton";
import { useNavigate } from 'react-router-dom';

//components
import { Datacontext } from '../../context/DataProvider';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    height: 32,
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: 'black',
            alignItems: 'center',
            display:'flex',   
            flexDirection: 'column',
            marginTop: 10,
            fontSize: 12,
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: 'white',
    marginLeft: 5,
    marginRight: '5px !important',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    fontSize: 20,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: 'white',
        color: 'black'
    }
}));



const CustomButton = () =>{
    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    }

    const {account} = useContext(Datacontext);

    return (
        <Wrapper>
            {
                account ? <Typography style={{fontSize: '20px', alignItems: 'center'}}> {account}</Typography>:
                    <LoginButton onClick={() => toLogin()}> Login</LoginButton> 

            }
                <IconButton size="large">
                <NotificationsIcon style={{color: "white"}} />
            </IconButton>
        </Wrapper>
    )
}

export default CustomButton;