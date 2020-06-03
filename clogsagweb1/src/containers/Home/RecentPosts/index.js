import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
    return (
        <div className="RecentPostContainer">
            <Card style={{ marginBottom: '20px' }}>
                <div className="postImageWrapper">
                    <img src={"https://i1.rgstatic.net/ii/profile.image/469776775553025-1489014919664_Q512/Anthony_Lithur.jpg"} alt=""></img>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div classname="span1">
                        <span> Featured </span>
                    </div>
                    <h2> Cant Wait To Finish this Shid</h2>
                    <span> postedonJuly 21, 20166 by Dora the Sora </span>
                    <p> This is supposed to be a long paragraph but i really dont have the time and energy for this really</p>
                    <a href="#" class="button">Read More</a>
                </div>


            </Card>

        </div>
    )

}

export default RecentPosts;