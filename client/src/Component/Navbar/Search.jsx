import { useState, useEffect } from 'react';
import { InputBase,List,ListItem,Box,styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer=styled(Box)`
    background: #f2f2f2;
    width: 38%;
    border-radius: 2px;
    margin-left:10px;
    display:flex;
`;
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: black;
`;
const InputSearchBase=styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;

const Search = () =>{
return(
    <SearchContainer>
        <InputSearchBase 
             placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
    </SearchContainer>
)
}

export default Search;