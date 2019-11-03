import React from 'react';
import './Home.css';
import blog from "../../assets/blog.json";
import SocialLink from "../../componentss/SocialLink";

export default class Home extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-avatar">
                    <img src={blog.profileImageUrl} alt={blog.name} height="150" width="150"/>
                </div>
                <div className="card-detail">
                    <h1>{blog.name}</h1>
                    <p>{blog.description}</p>
                    <p>{blog.location}</p>
                    {blog.socialLinks.map((item,index) => (
                        <SocialLink key={`social-link-${index}`} title={item.title} link={item.link} type={item.type}/>
                    ))}
                </div>
            </div>
        );
    }
}
