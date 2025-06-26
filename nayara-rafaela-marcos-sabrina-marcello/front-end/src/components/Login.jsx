import { BrowserRouter, Route, Router } from "react-router-dom";

function Login() {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={
                    <div id="container-login">
                          <form>
                            <label htmlFor="email" id="email">Email: {""}</label> 
                                                                                                   
                        </form>
                    </div>
                }>
                </Route>
            </Router>
        </BrowserRouter>
    );
}
export default Login;

