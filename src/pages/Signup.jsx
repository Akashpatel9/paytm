import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";

const Signup = () => {
  return (
    <div className="bg-zinc-800 h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-xl">
        <Heading>Sign up</Heading>
        <SubHeading>Enter your information to create an account</SubHeading>
        <Input
          label={"First Name"}
          name={"firstName"}
          placeholder={"John"}
          type={"text"}
        />
        <Input
          label={"Last Name"}
          name={"lastName"}
          placeholder={"Doe"}
          type={"text"}
        />
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

        <Button>Sign up</Button>

        <BottomWarning warning={"Already have an account?"} to={"Sign in"}/>
      </div>
    </div>
  );
};

export default Signup;
