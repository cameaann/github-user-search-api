import { ChangeEvent, useState } from "react";
import Icon from "./Icon";
import { useFetchUser } from "../hooks/useFetchUser";
import SearchButton from "./searchButton";
import { useMediaQuery } from "usehooks-ts";

function SearchBox() {
  const [userName, setUserName] = useState<string>("");
  const isMobile = useMediaQuery("(max-width: 600px)");

  let apiEndpoint = "https://api.github.com/users/" + userName;

  const { error, loadUser } = useFetchUser(apiEndpoint);

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
      <div className="search-formfield">
        <div className="search-box">
          {!isMobile ? (
            <Icon
              className="item-icon icon-search"
              icon="search"
              size={16}
              color="#4b6a9b"
              fill="#0079FF"
            ></Icon>
          ) : null}

          <input
            className="input-search"
            type="text"
            placeholder={isMobile ? "Search username" : "Search Github username"}
            value={userName}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div
          className={
            error?.error === "userNotFound" ? "errorMessage" : "hidden"
          }
        >
          No results
        </div>
      </div>

      <div className="btn-container">
        <SearchButton onClick={handleButtonClick} />
      </div>
    </form>
  );
}

export default SearchBox;
