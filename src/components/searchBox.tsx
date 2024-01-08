import { ChangeEvent, useState} from "react";
import Icon from "./Icon";
import { useFetchUser } from "../hooks/useFetchUser";

function SearchBox() {
  const [userName, setUserName] = useState<string>("");

  let apiEndpoint = "https://api.github.com/users/" + userName;

  const { loadUser } = useFetchUser(apiEndpoint);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleButtonClick = async (event: any) => {
    loadUser();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
      handleButtonClick(event);
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    handleButtonClick(event);
  };

  return (
    <form className="search-container" onSubmit={handleFormSubmit}>
      <div className="search-box">
        <Icon
          className="item-icon icon-search"
          icon="search"
          size={16}
          color="#4b6a9b"
          fill="#0079FF"
        ></Icon>
        <input
          className="input-search"
          type="text"
          placeholder="Search Github username"
          value={userName}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>

      <button className="searchBtn" onClick={handleButtonClick}>
        Search
      </button>
    </form>
  );
}

export default SearchBox;
