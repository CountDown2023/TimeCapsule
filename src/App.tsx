import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainSea from "./pages/MainSea";
import { UrlPaths } from "./routes";
import MainMap from "./pages/MainMap";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FindPassword from "./pages/FindPassword";
import NewPassword from "./pages/NewPassword";
import PasswordConfirm from "./pages/PasswordConfirm";
import NotFound from "./pages/NotFound";
import CapsuleDesign from "./pages/CapsuleDesign";
import Setting from "pages/Setting";

const Main = () => {
  return (
    <Routes>
      <Route path={UrlPaths.main.sea} element={<MainSea />} />
      <Route path={UrlPaths.main.map} element={<MainMap />} />
    </Routes>
  );
};

const User = () => {
  return (
    <Routes>
      <Route path={UrlPaths.user.signIn} element={<SignIn />} />
      <Route path={UrlPaths.user.signUp} element={<SignUp />} />
      <Route
        path={UrlPaths.user.passwordConfirm}
        element={<PasswordConfirm />}
      />
      <Route path={UrlPaths.user.newPassword} element={<NewPassword />} />
      <Route path={UrlPaths.user.findPassword} element={<FindPassword />} />
    </Routes>
  );
};

const Capsule = () => {
  return (
    <Routes>
      <Route path={UrlPaths.capsule.design} element={<CapsuleDesign />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={UrlPaths.main.index} element={<Main />} />
        <Route path={UrlPaths.user.index} element={<User />} />
        <Route path={UrlPaths.capsule.index} element={<Capsule />} />
        <Route path={UrlPaths.setting} element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
