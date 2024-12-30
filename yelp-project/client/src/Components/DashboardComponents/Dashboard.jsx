import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Dashboard.css'
import axios from 'axios';
import CreateModal from './CreateModal';
import { useNavigate, useParams } from 'react-router-dom';
const Dashboard = () => {
    const { id } = useParams();
    const [restaraunts, setRestaraunts] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("https://yelp-clone-server.onrender.com/posts")
            .then((res) => {
                console.log(res);
                setRestaraunts(res.data);
                setLoading(false)
            }).catch((e) => {
                console.log(e);
                setLoading(true)
            })
    }, [open])
    return (
        <Container>
            {
                open ? <CreateModal open={open} setOpen={setOpen} id={id} /> : null
            }
            <header className='dashboard-header'>
                <h2>Restaraunts</h2>
                <div className="btns">
                    <AddIcon onClick={() => setOpen(true)} style={{ cursor: "pointer" }} titleAccess='Add new restaraunt' />
                    <Button onClick={() =>  navigate('/login')}>Logout</Button>
                </div>
            </header>
            <Box>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: '800' }} align="left">Name</TableCell>
                                <TableCell style={{ fontWeight: '800' }} align="left">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                loading ? <h3>Loading...</h3>
                                :
                                restaraunts.map((item) => (
                                    <>
                                        {
                                            item.user === id ?
                                                <TableRow key={item._id}>
                                                    <TableCell>
                                                        {item.title}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.description}
                                                    </TableCell>
                                                </TableRow> : null
                                        }

                                    </>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    )
}

export default Dashboard