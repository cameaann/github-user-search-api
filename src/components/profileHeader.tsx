import React from "react";

interface ProfileHeaderProps {
  user: any;
  date: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, date }) => {
  return (
    <div className="header">
      <div className="box-header">
        <div>
          <h3 className="nickname">
            The {user.nickname === null ? user.nickteg : user.nickname}
          </h3>
          <div className="nickteg">@{user.nickteg}</div>
        </div>

        <span className="date">Joined {date}</span>
      </div>

      {/* <div className="biographi">
        {user.biography === null ? "This profile has no bio" : user.biography}{" "}
      </div> */}
    </div>
  );
};

export default ProfileHeader;
