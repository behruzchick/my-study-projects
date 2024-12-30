import React from 'react'
import { Button, Card } from 'react-bulma-components';
import './MainPosts.css';
import { Link, useNavigate } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
const MainPosts = ({ posts }) => {
    console.log(posts.data);
    // const MAX_LENGTH =150;
    const navigate = useNavigate();
    const truncateText = (text,maxLength)=> {
        if(text.length <= maxLength){
            return text;
        }

        return text.substring(0,maxLength) + '...';
    }
    return (
        <div className='posts-wrappe' style={{ padding: "30px" }}>
            {
                posts?.data?.map((post) => (
                    <Card className={post.isStared ? "stared": "card-f"} style={{cursor:"pointer" }}>
                        <Card.Content className='card-content'>
                            <img className='post-img' src={post.image} alt="" />
                        </Card.Content>
                        <Card.Content>
                            <div className="post-title">
                                <b>{post.title}</b>
                            </div>
                            <p className='post-description'>{truncateText(post.description,150)}</p>
                            <Link to={`/home/post/${post.id}`}>View</Link>
                            <p>{post.createdAt}</p>

                            <Button onClick={() => navigate(`/home/post/comments/${post.id}`)} style={{marginTop:"10px"}}><CommentIcon/></Button>
                        </Card.Content>
                    </Card>
                ))

            }
            

        </div>
    )
}

export default MainPosts