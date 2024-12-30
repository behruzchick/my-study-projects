import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../../CreateClient';
import { Box, Container } from 'react-bulma-components';
import './PostInfo.css'
const PostInfo = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();
    const [otherPosts, setOtherPosts] = useState([]);
    useEffect(() => {
        supabase
            .from('post')
            .select(`*`)
            .eq('id', id)
            .then((res) => {
                console.log(res);
                setPost(res?.data[0]);
            })

        supabase
            .from('post')
            .select('*')
            .then((res) => {
                setOtherPosts(res.data?.filter((post) => id != post.id));
            })

            // supabase
            // .from('post')
            // .insert("views_count",id)
            // .then((res) => {
            //     console.log("viewed!",res);
            // })

    }, [id])
    console.log("other", otherPosts);
    return (
        <Container className='container'>
            <Box className='post-data box'>
                <Box className='post-data-header box'>
                    <img src={post.image} alt="" />
                    <div className="post-title">
                        <b style={{ fontSize: "30px" }}>{post.title}</b>
                        <p>{post.createdAt}</p>
                    </div>
                </Box>
                <Box className='box'>
                    <p className='post-description'>{post.description}</p>
                </Box>
            </Box>
            <Box className='box'>
                <h2>Other post's</h2>
                <div className='other-posts-wrappe'>
                    {
                        otherPosts &&  otherPosts?.map((item) => (
                            <div onClick={() => navigate(`/home/post/${item.id}`)}className="other-post" key={item.id}>
                                <img  src={item.image} alt="" />
                            </div>
                        ))
                    }
                </div>
            </Box>
        </Container>
    )
}

export default PostInfo