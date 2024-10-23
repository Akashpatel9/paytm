import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  async function submiteHandler() {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        formData
      );
      toast.success(res.data.message);
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
        <Heading>Sign up</Heading>
        <SubHeading>Enter your information to create an account</SubHeading>
        <Input
          label={"First Name"}
          name={"firstName"}
          placeholder={"John"}
          type={"text"}
          onchange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          value={formData.firstName}
        />
        <Input
          label={"Last Name"}
          name={"lastName"}
          placeholder={"Doe"}
          type={"text"}
          onchange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          value={formData.lastName}
        />
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
          <button disabled={loading} onClick={submiteHandler}>{loading?"Loading...":"Sign up"}</button>
        </Button>

        <BottomWarning warning={"Already have an account?"} to={"Sign in"} />
      </div>
    </div>
  );
};

export default Signup;
