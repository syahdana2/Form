import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center m-4">
        <div className="outline outline-2 outline-offset-2 w-[1000px]  p-2">
          <h2 className="font-bold pl-2">Create Account-Register</h2>
          <div className="flex justify-center m-2 outline outline-offset-4 outline-1">
            <div className="outline outline-offset-2 outline-1 mr-2  w-1/4 bg-blue-700">
              <p className="text-right">Your Name</p>
              <p className="text-right">E-mail ID</p>
              <p className="text-right">Alternate E-mail ID</p>
              <br />
              <br />
              <p className="text-right">Your Phone</p>
              <p className="text-right">Mobile Phone</p>
              <p className="text-right">Your Portal Phone</p>
              <br />
              <br />
              <br />
              <p className="text-right">Country</p>
              <p className="text-right">Password</p>
              <p className="text-right">Re-Enter Password</p>
            </div>
            <div className="outline outline-offset-2 outline-1 w-3/4">
              <div>
                <input type="text" className="outline outline-1 mb-1" required />
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" required />
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" required />
              </div>
              <p className="mb-1">
                Country Code---------------------City Code------------------Phone Number
              </p>
              <input type="text" className="outline outline-1 mr-2 mb-1" required />
              <input type="text" className="outline outline-1 mr-2 mb-1" required />
              <input type="text" className="outline outline-1 mr-2 mb-1" required/>
              <div>
                <input type="text" className="outline outline-1 mb-1" required />
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" required />
              </div>
              <div>
                <textarea
                  type="text"
                  className="outline outline-1 mb-1"
                ></textarea>
              </div>
              <div>
                <select className="outline outline-1 mb-1">
                  <option value="1">--------Select One-----</option>
                </select>
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" required />
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" required/>
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-1">
                  I accept the{" "}
                  <a href="#" className="text-blue-700">
                    <u>Terms of use</u>{" "}
                  </a>
                </p>
              </div>
              <div>
                <button type="submit" className="outline outline-1" onClick={() => navigate('/')}>
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

export default Register;
