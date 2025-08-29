import React from "react";
import { useMediaQuery } from "usehooks-ts";
import Icon from "./Icon";

interface SearchButtonProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <button onClick={onClick} className={ isMobile ? "searchBtn mobile" :"searchBtn"}>
      {!isMobile ? (
        <>Search</>
      ) : (
        <Icon
          className="item-icon icon-search"
          icon="search"
          size={16}
          color="#FFFFFF"
          fill="#FFFFFF"
        ></Icon>
      )}
    </button>
  );
};

export default SearchButton;
