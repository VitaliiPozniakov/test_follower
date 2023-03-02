import {
  Thumb,
  Logo,
  BackGroundImg,
  Line,
  User,
  Elipse,
  Circle,
  Tweets,
  Followers,
  Button,
} from "./appStyled";
import backgroundPicture from "./img/backgroundPicture.png";
import elips from "./img/elips.png";
import avatar from "./img/avatar.png";
import logo from "./img/logo.png";
import { useLocalStorageBoolean } from "react-use-window-localstorage";
import { useLocalStorageNumber } from "react-use-window-localstorage";

function App() {
  const [isFollowing, setIsFollowing] = useLocalStorageBoolean(
    "boolValue",
    true
  );
  const [followers, setFolowers] = useLocalStorageNumber("pi", 100500);
  const [color, setIsColor] = useLocalStorageBoolean("boolValue", false);

  const handleClick = () => {
    setIsColor(!color);
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      setFolowers(followers + 1);
    }
    if (isFollowing) {
      setFolowers(followers - 1);
    }
  };

  return (
    <Thumb>
      <Logo src={logo} alt="logo" />
      <BackGroundImg src={backgroundPicture} alt="background" />
      <Line />
      <Elipse src={elips} alt="elipse" />
      <Circle />
      <User src={avatar} alt="avatar" />
      <Tweets>777 tweets</Tweets>
      <Followers>{followers.toLocaleString("ja-JP")} Followers</Followers>
      <Button onClick={handleClick} backgroundColor={color ? "#5CD3A8;" : "#EBD8FF;"}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </Thumb>
  );
}

export default App;
