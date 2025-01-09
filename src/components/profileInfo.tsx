import { useMediaQuery } from "usehooks-ts";
import Icon from "./Icon";
import { Suspense } from "react";
import ProfileHeader from "./profileHeader";

function ProfileInfo(props: any) {
  const isMobile = useMediaQuery("(max-width: 426px)");
  let user = props.user;

  function formatInfo(value: string | null) {
    return !value || value.length === 0 ? "Not Available" : value;
  }

  function addOpacity(value: string | null) {
    return !value || value.length === 0 ? "half-transparent" : "";
  }

  const formatDate = (inputDate: string): string => {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  };

  function Loading() {
    console.log("loading");
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <Suspense fallback={<Loading />}>
      {/* <div> */}
      <div className="profile-info">
        <div className="profile-header">
          <img className="avatar" src={user.avatar} alt="avatar" />
          {isMobile ? (
            <ProfileHeader user={user} date={formatDate(user.created)} />
          ) : null}
        </div>

        <div className="details">
          {!isMobile ? (
            <ProfileHeader user={user} date={formatDate(user.created)} />
          ) : null}

          {/* <div className="activity">
            <div className="activiti-name">Repos</div>
            <div className="activiti-name">Folowers</div>
            <div className="activiti-name">Following</div>
            <div className="count">{user.repos}</div>
            <div className="count">{user.followers}</div>
            <div className="count">{user.following}</div>
          </div> */}

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
            <div className="social-item">
              <Icon
                className={"item-icon icon-pin " + addOpacity(user.location)}
                icon="pin"
                size={16}
                color="#4b6a9b"
              ></Icon>
              <span
                className={"item-icon item-name " + addOpacity(user.location)}
              >
                {formatInfo(user.location)}
              </span>
            </div>
            <div className="social-item">
              <Icon
                className={
                  "item-icon icon-twitter " + addOpacity(user.twitter_username)
                }
                icon="twitter"
                size={16}
                color="#4b6a9b"
              ></Icon>
              <span
                className={"item-name " + addOpacity(user.twitter_username)}
              >
                {formatInfo(user.twitter_username)}
              </span>
            </div>
            <div className="social-item">
              <Icon
                className={"item-icon icon-url " + addOpacity(user.blog)}
                icon="url"
                size={16}
                color="#4b6a9b"
              ></Icon>
              <span>
                <a
                  className={"item-name " + addOpacity(user.blog)}
                  href={user.blog}
                >
                  {formatInfo(user.blog)}
                </a>
              </span>
            </div>
            <div className="social-item">
              <Icon
                className={
                  "item-icon icon-office-building " + addOpacity(user.company)
                }
                icon="office-building"
                size={16}
                color="#4b6a9b"
              ></Icon>
              <span className={"item-name " + addOpacity(user.company)}>
                {formatInfo(user.company)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Suspense>
  );
}

export default ProfileInfo;
