import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ContentPost from "../ContentPostContainer/ContentPost";
import Post from "../PostContainer/Post";

const MainPostContainer = styled(Box)`
    width: 70%;
    margin: 0px 0px 0px 30px;
    display: flex;
    flex-direction: column;
`;

const MainPost = ({posts}) => {
    return (
        <MainPostContainer>
            <ContentPost />
            <Post posts={posts}/>
        </MainPostContainer>
    )
}

export default MainPost;