import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Cadastro from "./Cadastro";

function Login() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div id="container-login">
              <form className="form-login">
                <label htmlFor="email" id="email">
                  Email:{" "}
                </label>
                <input type="email" name="email" id="email" />
                <br />
                <label htmlFor="senha" id="senha">
                  Senha:{" "}
                </label>
                <input type="password" name="senha" id="senha" />
                <br />
                <Link to="/cadastro">
                  <Cadastro />
                </Link>
              </form>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Login;
