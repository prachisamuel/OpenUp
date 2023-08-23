import styled from '@emotion/styled';
import {AppBar,Box,Toolbar} from '@mui/material';
//import { Link } from 'react-router-dom';

//components
import Search from './Search';
import CustomButton from './CustomButton';

const StyledNavbar = styled(AppBar)`
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    height: 65px;
    margin-bottom: 20px;
`;

const LogoContainer = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const Navbar = () => {
    const logoURL = 'https://drive.google.com/uc?export=view&id=1f-9e5mBNMLZ_vffWaLEiJbpeet9p0RLB'
    return (
        <StyledNavbar>
            <Toolbar>
                <LogoContainer>
                    <img src={logoURL} alt="logo" style={{width: 160}} />
                </LogoContainer>
                <Search />
                <CustomButton />
            </Toolbar>
        </StyledNavbar>
    )
}

export default Navbar;