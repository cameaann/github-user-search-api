import Icon from "./Icon";
import { Suspense } from "react";

function ProfileInfo(props: any) {
  let user = props.user;

  function formatInfo(value: string | null) {
    return !value || value.length === 0 ? "Not Available" : value;
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
    <div>
      <div className="profile-info">
        <img className="avatar" src={user.avatar} alt="avatar" />
        <div className="details">
          <div className="box-header">
            <h3 className="nickname">
              The {user.nickname === null ? user.nickteg : user.nickname}
            </h3>
            <span className="date">Joined {formatDate(user.created)}</span>
          </div>
          <div className="nickteg">@{user.nickteg}</div>
          <div className="biographi">
            {user.biography === null
              ? "This profile has no bio"
              : user.biography}{" "}
          </div>
          <div className="activity">
            <div className="activiti-name">Repos</div>
            <div className="activiti-name">Folowers</div>
            <div className="activiti-name">Following</div>
            <div className="count">{user.repos}</div>
            <div className="count">{user.followers}</div>
            <div className="count">{user.following}</div>
          </div>
          <div className="social-media">
            <div className="social-item">
              <Icon
                className="item-icon icon-pin"
                icon="pin"
                size={16}
                color="#4b6a9b"
              ></Icon>
              <span className="item-icon item-name">
                {formatInfo(user.location)}
              </span>
            </div>
            <div className="social-item">
              <Icon
                className="item-icon icon-twitter"
                icon="twitter"
                size={16}
                color="#4b6a9b"
              ></Icon>
              <span className="item-name">
                {formatInfo(user.twitter_username)}
              </span>
            </div>
            <div className="social-item">
              <Icon
                className="item-icon icon-url"
                icon="url"
                size={16}
                color="#4b6a9b"
              ></Icon>
              <span>
                <a className="item-name" href={user.blog}>
                  {formatInfo(user.blog)}
                </a>
              </span>
            </div>
            <div className="social-item">
              <Icon
                className="item-icon icon-office-building"
                icon="office-building"
                size={16}
                color="#4b6a9b"
              ></Icon>
              <span className="item-name">{formatInfo(user.company)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
}

export default ProfileInfo;
