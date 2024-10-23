import { useContext, useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../context/AuthProvider";

const Signin = () => {

  const {login} = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  async function submiteHandler() {
    try {
      setLoading(true);
      const {data} = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        formData
      );
      toast.success(data.message);
      login(data.token);
    } catch (error) {
      toast.error(error.response.data.message);
    }finally{
      setLoading(false);
    };
  }

  return (
    <div className="bg-zinc-800 h-screen w-full flex items-center justify-center px-4">
      <ToastContainer />
      <div className="bg-white p-10 rounded-xl">
        <Heading>Sign in</Heading>
        <SubHeading>Enter your credentials to access your account</SubHeading>
        <Input
          label={"Username"}
          name={"username"}
          placeholder={"JohnDoe@123"}
          type={"text"}
          onchange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          value={formData.username}
        />
        <Input
          label={"Password"}
          name={"password"}
          placeholder={""}
          type={"password"}
          onchange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
        />

        <Button loading={loading}>
          <button disabled={loading} onClick={submiteHandler}>{loading?"Loading...":"Sign in"}</button>
        </Button>

        <BottomWarning warning={"Don't have an account?"} to={"Sign up"} />
      </div>
    </div>
  );
};

export default Signin;
