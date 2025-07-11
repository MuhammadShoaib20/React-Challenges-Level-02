import "./styles.css";
import RealTimeClock from "./Component/RealTimeClock";
import DarkModeTheme from "./Component/DarkModeTheme";
import FetchUserData from "./Component/FetchUserData";
import SimpleLogin from "./Component/SimpleLogin";
import PasswordToggles from "./Component/PasswordToggles";
import Parent from "./Component/PropsDrilling/Parent";
import ReusableButton from "./Component/ReusableButton"
import ImagesGalleryPreview from "./Component/ImagesGalleryPreview";
import SimpleTabSwitcher from "./Component/SimpleTabSwitcher";
import TypingSpeedTracker from "./Component/TypingSpeedTracker";
function App() {
  const handleGreet = () => {
    alert("Hello Shoaib");
  };
  const handleWarn = () => {
    alert("Warning: Are you sure?");
  };
  const handleBye = () => {
    alert("GoodBye Shoaib ");
  };
  return (
    <div className="App">
      <RealTimeClock />
      <DarkModeTheme />
      <FetchUserData />
      <SimpleLogin />
      <PasswordToggles />
      <Parent />
      <h1>Resuable Button Task </h1>
      <h4>Trigger different alert messages on click. </h4>
      <div className="button-row" style={{ marginLeft: "20px" }}>
        <ReusableButton label={"Greet"} onClick={handleGreet} />
        <ReusableButton label={"warn"} onClick={handleWarn} />
        <ReusableButton label={"SayBye"} onClick={handleBye} /> 
      
        <ImagesGalleryPreview />
        <SimpleTabSwitcher />
        <TypingSpeedTracker />
      </div>
    </div>
  );
}
export default App;
