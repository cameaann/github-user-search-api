import React from "react";
import userPhoto from "../assets/images/userphoto.png";
import Icon from "./Icon";

function ProfileInfo() {
  return (
    <div className="profile-info">
      <img className="avatar" src={userPhoto} alt="avatar" />
      <div className="details">
        <div className="box-header">
          <h3 className="nickname">The Octopat</h3>
          <span className="date">Joined 25 Jan 2011</span>
        </div>
        <div className="nickteg">@octopat</div>
        <div className="biographi">This profile has no bio</div>
        <div className="activity">
          <div className="activiti-name">Repos</div>
          <div className="activiti-name">Folowers</div>
          <div className="activiti-name">Following</div>
          <div className="count">8</div>
          <div className="count">3938</div>
          <div className="count">9</div>
        </div>
        <div className="social-media">
            <div className="social-item">
                <Icon className="item-icon icon-pin" icon="pin" size={16} color="#4b6a9b"></Icon>
                <span className="item-icon item-name">San Francisco</span>
            </div>
            <div className="social-item">
                <Icon className="item-icon icon-twitter" icon="twitter" size={16} color="#4b6a9b"></Icon>
                <span className="item-name">Not Available</span>
            </div>
            <div className="social-item">
                <Icon className="item-icon icon-url" icon="url" size={16} color="#4b6a9b"></Icon>
                <span ><a className="item-name" href="https://github.blog">https://github.blog</a></span>
            </div>
            <div className="social-item">
                <Icon className="item-icon icon-office-building" icon="office-building" size={16} color="#4b6a9b"></Icon>
                <span className="item-name">@github</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
