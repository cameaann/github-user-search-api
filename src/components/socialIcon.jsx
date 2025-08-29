import Icon from "./Icon";
import { formatInfo, addOpacity } from "../func";

export const SocialIcon = ({ name, userInfo }) => {
  const link =
    name === "url" ? (
      <a href={userInfo}>{formatInfo(userInfo)}</a>
    ) : (
      <>{formatInfo(userInfo)}</>
    );
  return (
    <div className="social-item">
      <Icon
        className={`item-icon icon-${name} ${addOpacity(userInfo)}`}
        icon={name}
        size={16}
        color="#4b6a9b"
      />
      <span className={`item-name ${addOpacity(userInfo)}`}>
        {link}
      </span>
    </div>
  );
};
