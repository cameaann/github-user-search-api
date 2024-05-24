/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from "react";
import ProfileInfo from "./profileInfo";
import SearchBox from "./searchBox";
import { Switch } from "./switch";

export interface User {
  id: number;
  nickname?: string;
  avatar?: string;
  created?: string;
  nickteg: string;
  biography: string | null;
  repos?: number;
  followers?: number;
  following?: number;
  twitter_username?: string | null;
  location?: string | null;
  blog?: string | null;
  company?: string | null;
}

export interface UserContextType {
  user: User;
  updateUser: (newUser: User) => void;
}

const defaultUser: User = {
  id: 583231,
  nickname: "Octopat",
  avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
  created: "25 Jan 2011",
  nickteg: "octopat",
  biography: null,
  repos: 8,
  followers: 11595,
  following: 9,
  twitter_username: null,
  location: "San Francisco",
  blog: "https://github.blog",
  company: "@github"
};
export const UserContext = createContext<UserContextType | undefined>(undefined);

function Main() {
  const [user, setUser] = useState<User>(defaultUser);

  const updateUser = (newUser: User) =>{
    setUser(newUser);
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <main>
        <div className="container-wrap">
          <Switch />
          <SearchBox/>
          <ProfileInfo user={user} />
        </div>
      </main>
    </UserContext.Provider>
  );
}

export default Main;
