import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import hand from "../images/hand.png";
import "./Hello.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";
export default function Hello() {
  const responseGoogle = (response) => {
    dispatch(setUser(response.profileObj));
    console.log(response, "response");
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  function goHomePage() {
    navigate("/home");
  }
  return (
    <div className="hl">
      <div className="hello">
        <div className="logo-text">
          <img src={hand} alt="" />
          <h1> Slider Club </h1>
        </div>
        <h4 className="sign-text">
          Sign up to share your presenntation on Slider App.<br></br>
          We can't wait for you to join!
        </h4>
        <GoogleLogin
          clientId="883837508135-b1s1prjqgus7naet9qcegtjrla13qvpv.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        >
          <button onClick={goHomePage} className="btn-login">
            Sign in with Google
          </button>
        </GoogleLogin>
        <p>Preview existing presentation? Click here to enter code</p>
      </div>
    </div>
  );
}
