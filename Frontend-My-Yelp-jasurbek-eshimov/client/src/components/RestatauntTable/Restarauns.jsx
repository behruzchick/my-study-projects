import React from "react";
import "./Restarauns.css";
import { gql, useMutation, useQuery } from "@apollo/client";
import Table from 'react-bootstrap/Table';
const GET_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      name
      posts {
        restaurantName
        restaurantImage
        restaurantDesc
      }
    }
  }
`;
export const Restarauns = () => {
  const { data, error, loading } = useQuery(GET_POSTS);
  if (error) {
    console.log(error);
  }
  //   console.log({ data, loading, error });
  return (
    <div className="posts_wrape">
      {error ? (
        <h1>error</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        data.getAllPosts.map((post, index) => {
          return (
            <div className={post.posts.length === 0 ? "null_post" : "post_block"} key={index}>
              <div className="posts">
                <div className="post_info_wrape">
                  <div className="posts_info">
                    {post.posts.map((p1, index) => {
                      return (
                        <Table  hover key={index} style={{border:"1px solid #fff",padding:'10px'}}>
                          <thead>
                            <tr>
                              <th style={{ color: "white" }}>Restaraunt name:</th>
                              <th style={{color:"white"}}>{p1.restaurantName
                              }</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ color: "white" }}>Restaraunt description:</td>
                              <td style={{ color: "white" }}>{p1.restaurantDesc}</td>
                            </tr>
                          </tbody>
                        </Table>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
