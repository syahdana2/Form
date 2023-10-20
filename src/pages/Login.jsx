import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center m-4">
        <div className="outline outline-offset-2 outline-2 w-[800px] p-2">
          <h2 className="font-bold pl-2">Already registered? Login here</h2>
          <div className="flex justify-center m-2 outline outline-offset-4 outline-1">
            <div className="outline outline-offset-2 outline-1 mr-2  w-1/2 bg-blue-700">
              <p className="text-right">Email</p>
              <p className="text-right">Password</p>
            </div>
            <div className="outline outline-offset-2 outline-1 w-1/2">
              <div>
                <input type="text" className="outline outline-1 mb-1" placeholder="Email" required />
              </div>
              <div>
                <input type="password" className="outline outline-1 mb-1" placeholder="Password" required />
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-1">Save my Email and Password</p>
              </div>
              <div>
                <button type="submit" className="outline outline-1" onClick={() => navigate('/register')}>
                  Continue&gt;&gt;
                </button>
                <button className="outline outline-1 ml-2" type="reset">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
