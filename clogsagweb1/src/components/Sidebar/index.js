import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

    return (
        <div className="sidebarContainer">
            <Card style={{ marginBottom: '20px', padding: '10px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                    <div className="profileImageContainer">
                        <img src="https://i1.rgstatic.net/ii/profile.image/469776775553025-1489014919664_Q512/Anthony_Lithur.jpg" alt=""></img>
                    </div>
                </div>
                <div className="cardBody">
                    <p className="personalBio"> My name is Dozz Trying to finish off this website so that the website is finished you see</p>
                </div>
            </Card>

            {/*  <Card style={{ marginBottom: '20px', padding: '10px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card> */}

            <Card style={{ marginBottom: '20px', padding: '10px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
        </div>
    )

}

export default Sidebar;