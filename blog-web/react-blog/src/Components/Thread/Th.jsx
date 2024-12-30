import React, { useEffect, useState } from 'react'
import { supabase } from '../../CreateClient'
import { useParams } from 'react-router-dom'
import { Box, Button } from 'react-bulma-components';
import { ImageList, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import PersonIcon from '@mui/icons-material/Person';
const Th = ({ token }) => {
  const { id } = useParams();
  const [answer, setAnswer] = useState("");
  const [thread, setThread] = useState({});
  const [thComments, setThComments] = useState([]);
  useEffect(() => {
    supabase
      .from('thread')
      .select('*')
      .eq('id', id)
      .then((res) => {
        console.log(res);
        setThread(res?.data[0]);
      })
    supabase
      .from('thread_comments')
      .select('*')
      .eq('thId', id)
      .then((res) => {
        console.log(res);
        setThComments(res.data);
      })
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault()
    try {
      if (!answer) {
        toast.error("Please field answer!");
      } else {
        await supabase
          .from('thread_comments')
          .insert([
            {
              comment: answer,
              thId: id,
              useremail: token.user.email
            }
          ]).then(() => {
            setAnswer("");
            toast.success("Successfuly created new answer");
          })

      }


    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <ToastContainer />
      <Box className='box'>
        <b>{thread.thread_title}</b>
      </Box>
      <ImageList style={{ padding: "20px", display: 'flex', flexDirection: 'column', gap: "20px",height:"200px" }}>
        {
          thComments.map((comment) => (
            <div key={comment.id} style={{ display: "flex", gap: "10px" ,flexDirection:'column'}}>
              <div className="user-data" style={{display:"flex",gap:"10px"}}>
                <PersonIcon />
                <p>{comment.useremail}</p>
              </div>
              <b key={comment.id}>{comment.comment}</b>
            </div>
          ))
        }
      </ImageList>
      <Box style={{ position: 'absolute', bottom: '30px', width: "100%" }}>
        <div className="input-box" style={{ background: '#fff', padding: "30px", borderRadius: "10px" }}>
          <TextField onChange={(e) => setAnswer(e.target.value)} label='Answer' style={{ width: "100%" }} />
          <Button onClick={handleSumbit} style={{ marginTop: "20px", width: "300px", padding: "20px" }}>Sumbit</Button>
        </div>
      </Box>
    </div>
  )
}

export default Th