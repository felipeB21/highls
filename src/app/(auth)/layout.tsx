import { FC, ReactNode } from "react";
import NavBar from "@/components/navbar";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthLayout;
