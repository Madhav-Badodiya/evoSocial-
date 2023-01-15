import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello, World!</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur aspernatur dicta molestiae quasi. Minima molestias
            tempora laudantium aliquam libero sint odit!{" "}
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
