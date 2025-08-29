import { useMediaQuery } from "usehooks-ts";
import { Suspense } from "react";
import ProfileHeader from "./profileHeader";
import { SocialIcon } from "./socialIcon";
import { formatDate } from "../func";

function ProfileInfo(props: any) {
  const isTablet= useMediaQuery("(max-width: 768px)");
  let user = props.user;

  function Loading() {
    console.log("loading");
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="profile-info">
        <div className="profile-header">
          <img className="avatar" src={user.avatar} alt="avatar" />
          {isTablet ? (
            <ProfileHeader user={user} date={formatDate(user.created)} />
          ) : null}
        </div>

        <div className="details">
          {!isTablet ? (
            <ProfileHeader user={user} date={formatDate(user.created)} />
          ) : null}
          <div className="biographi">
            {user.biography === null
              ? "This profile has no bio"
              : user.biography}{" "}
          </div>
          <table className="activity">
            <thead>
              <tr>
                <th className="activity-name">Repos</th>
                <th className="activity-name">Followers</th>
                <th className="activity-name">Following</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="count">{user.repos}</td>
                <td className="count">{user.followers}</td>
                <td className="count">{user.following}</td>
              </tr>
            </tbody>
          </table>
          <div className="social-media">
            <SocialIcon name="pin" userInfo={user.location} />
            <SocialIcon name="twitter" userInfo={user.twitter_username} />
            <SocialIcon name="url" userInfo={user.blog} />
            <SocialIcon name="office-building" userInfo={user.company} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default ProfileInfo;
