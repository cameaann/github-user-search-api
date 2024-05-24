import { useState } from "react";
import { User } from "../components/main";
import { useUser } from "./useUser";

interface IFetchUserError {
  error: "userNotFound"
}

export function useFetchUser(apiEndpoint: string) {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<IFetchUserError>();

  const loadUser = async () => {
    setIsLoading(true);

    try {
      var response = await fetch(apiEndpoint);
      if (response.ok){
        var data = await response.json();
        const foundUser: User = {
          id: data.id,
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
        console.log(foundUser);

      } else if (response.status === 404){
        setError({
          error:"userNotFound"
        });
      }
    } catch (errMessage) {
        console.log(errMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, user, isLoading, loadUser };
}
