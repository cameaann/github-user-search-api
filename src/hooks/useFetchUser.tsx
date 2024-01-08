import { useState } from "react";
import { User } from "../components/main";
import { useUser } from "./useUser";

export function useFetchUser(apiEndpoint: string) {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadUser = async () => {
    setIsLoading(true);

    return fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        try {
          const foundUser: User = {
            nickname: data.name,
            avatar: data.avatar_url,
            created: data.created_at,
            nickteg: data.login,
            biography: data.bio,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            twitter_username: data.twitter_username,
            location: data.location,
            blog: data.blog,
            company: data.company,
          };
          updateUser(foundUser);
          console.log(data);
          return user;
        } catch (errMessage) {
          console.log(errMessage);
        } finally {
          setIsLoading(false);
        }
      });
  };

  return { user, isLoading, loadUser };
}
