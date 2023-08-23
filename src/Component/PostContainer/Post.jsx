import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import profileimage from '../../Pages/Profile/profileimage.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ColorImage from "./img";
import { Component, useState } from "react";
import { addLike } from "../../services/api";

const PostContainer = styled(Box)`
    width: 94%;
    background-color: white;
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
`;

const SubPostContainer = styled(Box)`
    width: 94%;
    background-color: white;
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
`;

const PostComponent = styled(Box)`
    
`;

const UserInfo = styled(Box)`  
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

const UserText = styled(Typography)`  
    text-align: start;
    width: 96%;
    margin: 10px;
    margin-left: 20px; 
`;

const Username = styled(Typography)`  
    margin-left: 10px;
    font-size: 20px;
`;

const Wrapper = styled(Box)`  
    text-align: start;
    margin-left: 10px;
`;

export default function Post({posts}) {
    const [ like, setLike ] = useState(FavoriteIcon);
    const [count, setCount] = useState(posts.like.length);
    const handleClick = async(name) => {
        if(like==FavoriteIcon)
        {
            setCount(like+1);
            let response = await addLike({name,like});//api call
            if(!response) return;
        }
        else
        {
            setCount(like-1);
            let response = await addLike(name,like);//api call
            if(!response) return;
        }
        

        
    }
    return (
        <PostContainer>
            <SubPostContainer>
                {
                    posts.map(posts => (
                    <PostComponent>
                        <UserInfo>
                            <ColorImage curcolor={posts.color} />
                            <Username>
                                {posts.username} 
                            </Username>
                        </UserInfo>
                        <UserText>
                            {posts.posttext}
                        </UserText>
                        <Wrapper>
                            <IconButton onClick={handleClick(posts.username)}>
                                <FavoriteIcon style={{color: "pink", textAlign: "start", margin: '5px'}} />
                                <Typography style={{marginLeft: "5px"}}>{count}</Typography>
                            </IconButton>
                            <IconButton>
                                <QuestionAnswerIcon style={{color: "grey", textAlign: "start", margin: '5px'}} />
                            </IconButton>  
                        </Wrapper>
                        <hr/>
                    </PostComponent>

                    ))
                } 
            </SubPostContainer>
        </PostContainer>
    )
}