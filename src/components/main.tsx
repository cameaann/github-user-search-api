import ProfileInfo from "./profileInfo";
import SearchBox from "./searchBox";
import { Switch } from "./switch";

function Main() {


  return (
    <main>
      <div className="container-wrap">
        <Switch/>
        <SearchBox />
        <ProfileInfo />
      </div>
    </main>
  );
}
export default Main;
