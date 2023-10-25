import { useState } from "react";
import SigninInput from "../components/signin/SigninInput";
import SigninImage from "../components//signin/SigninImage";
const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleSignin = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            alert('請輸入帳號密碼');
            return;
        }
        // read user data from localstorage and add new user data
        const user = JSON.parse(localStorage.getItem('user')) || [];
        const newUser = {
            email,
            password,
            name
        }
        user.push(newUser);
        localStorage.setItem('user', JSON.stringify(user));
        
        
        alert('註冊成功');
        window.location.href = '/login';
    }
    
    return (
        <div className="h-screen bg-[#ECFEFC]/[.2] flex w-full flex-wrap ">
            <div className="flex-initial w-2/5">
                {/* <CardLeft /> */}
                <SigninImage/> 
            </div>
            <div className="flex-inital w-3/5 flex flex-col justify-center items-center ">
                <SigninInput email={[email, handleEmail]} handleSignin={handleSignin} Password={[password, handlePassword]} name={[name, handleName]} />
            </div>
        </div>
    );
}

export default SigninPage;