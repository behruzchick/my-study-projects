import React, { useEffect, useState } from 'react'
import { supabase } from '../../../CreateClient'
import { useParams } from 'react-router-dom'
import { Box, Button } from 'react-bulma-components';
import { ImageList, TextField, TextareaAutosize, darkScrollbar } from '@mui/material';
import './Comments.css'
import PersonIcon from '@mui/icons-material/Person';
import { ToastContainer, toast } from 'react-toastify';
const Comments = () => {

    const {id} = useParams();
    const [post,setPost] = useState({});
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [comments,setComments] = useState([]);
    useEffect(() => {
        supabase
        .from('post')
        .select('*')
        .eq('id',id)
        .then((res) => {
            console.log(res);
            setPost(res.data[0])
        })

        supabase
        .from('comments')
        .select('*')
        .eq('postId',id)
        .then((res) => {
            console.log("comments",res);
            setComments(res.data);
        })
    } , [id])

    const handleAddComment  = () => {
        try {
            if(!name){
                toast.error("Please enter name!")
            }else if(!desc){
                toast.error("PLease enter comment!")
            }
            toast.success("Sucessfuly added new comment!")
            supabase
            .from('comments')
            .insert([{
                name:name,
                desc:desc,
                postId:id
            }])
            .then((res) => {
                console.log(res);
            })
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='comment-wrappe'>
        <ToastContainer/>
        <Box className='box post-box' style={{display:"flex",flexDirection:'column',alignItems:"start"}}>
            <img className='post-img-f' src={post.image} alt="" />
            <b>{post.title}</b>
        </Box>
        <Box>
            <Box style={{width:"100%"}}>
                <TextField onChange={(e) => setName(e.target.value)} label='Enter you are name'/>
                <textarea placeholder='Comment' onChange={(e => setDesc(e.target.value))} className='textarea' label='Enter Comment'/>
                <Button onClick={handleAddComment} style={{marginTop:"10px"}}>Add comment</Button>
            </Box>
            <ImageList className='image-list' style={{padding:"15px",display:"flex",flexDirection:'column',gap:"30px"}}>
                {
                    comments.map((comment) => (
                        <div className='comment'>
                            <div className="person" style={{display:'flex',alignItems:"center",gap:"10px"}}>
                                <PersonIcon/>
                                <b>{comment.name}</b>
                            </div>
                            <p>{comment.desc}</p>
                        </div>
                    ))
                }
            </ImageList>
        </Box>
    </div>
  )
}

export default Comments