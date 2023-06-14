import LoginRequired from "@/components/LoginRequired";
import User from "@/components/User";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <LoginRequired>
        <User />
      </LoginRequired>
    </div>
  );
};

export default Home;
