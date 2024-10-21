import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";

const Signin = () => {
  return (
    <div className="bg-zinc-800 h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-xl">
        <Heading>Sign up</Heading>
        <SubHeading>Enter your credentials to access your account</SubHeading>
        <Input
          label={"Username"}
          name={"username"}
          placeholder={"JohnDoe@123"}
          type={"text"}
        />
        <Input
          label={"Password"}
          name={"password"}
          placeholder={""}
          type={"password"}
        />

        <Button>Sign in</Button>

        <BottomWarning warning={"Don't have an account?"} to={"Sign up"}/>
      </div>
    </div>
  );
};

export default Signin;
