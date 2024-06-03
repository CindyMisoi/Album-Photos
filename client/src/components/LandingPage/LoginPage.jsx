import logo from "../../assets/logo.png";
import { MdKeyboardBackspace } from "react-icons/md";
import LoginForm from "../../components/Forms/LoginForm";
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </Link>
          <h1 className="font-semibold text-2xl">Welcome!</h1>
        </div>
        <div>
          <Link to="/" className="text-gray-600 flex items-center">
            <MdKeyboardBackspace className="mr-2" />
            <p className="text-sm">Back to home page</p>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
