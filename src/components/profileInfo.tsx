import React from "react";
import userPhoto from "../assets/images/userphoto.png";

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
          <div>Repos</div>
          <div>Folowers</div>
          <div>Following</div>
          <div className="count">8</div>
          <div className="count">3938</div>
          <div className="count">9</div>
        </div>
        <div className="social-media">
            <div className="social-item">
                <i className="item-icon"></i>
                <span className="item-name">San Francisco</span>
            </div>
            <div className="social-item">
                <i className="item-icon"></i>
                <span className="item-name"><a href="https://github.blog">https://github.blog</a></span>
            </div>
            <div className="social-item">
                <i className="item-icon"></i>
                <span className="item-name">Not Available</span>
            </div>
            <div className="social-item">
                <i className="item-icon"></i>
                <span className="item-name">@github</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
