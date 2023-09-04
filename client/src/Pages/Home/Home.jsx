import { useEffect } from 'react';
import {Box} from '@mui/material';
import styled from '@emotion/styled';

import Leftbar from "../../Component/LeftPostContainer/Leftbar";
import MainPost from "../../Component/MainPostContainer/MainPost";

import { getPosts } from '../../redux/actions/postActions';
import { useDispatch,useSelector } from 'react-redux';
import Navbar from '../../Component/Navbar/Navbar';

const HomeStyled = styled(Box)`
    background: rgb(235,238,242);
    height: 100vh;
    width: 98.9vw;
    display:flex;
    justify-content: space-between;
`

const Component = styled(Box)`
    margin: 10px 40px 0px 40px;
    margin-top: 65px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
`;

const Home = () => {

    const getPost = useSelector(state => state.getPosts)
    const {posts} = getPost;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <HomeStyled>
            <Navbar/>
            <Component>
                <Leftbar />
                <MainPost posts={posts}/>
            </Component>

        </HomeStyled>
    )
}

export default Home;