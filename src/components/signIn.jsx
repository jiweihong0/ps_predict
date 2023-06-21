import React from "react";

const SignIn = () => {
    return (
        <div >
            <h1 className="mb-5 left-1/2">登入Title</h1>
            <form >
                <div className="" style={{
                    position: "relative",
                    width: "50vw",
                    height: "5vh",
                    marginBottom: "15px",
                }}>
                    <span style={{
                        position: "absolute",
                        left: "3%",
                        transform: "translate(3%, -50%)",
                        backgroundColor: "white",
                        zIndex: "1",

                    }}>電子郵件</span>
                    <input style={{
                        width: "100%",
                        height: "100%",
                        outline: "solid",
                        outlineColor: "black",
                        borderRadius: "15px",
                    }} className="" type="password" required="required" />
                </div>
                <div className="" style={{
                    position: "relative",
                    width: "50vw",
                    height: "5vh",
                }}>
                    <span style={{
                        position: "absolute",
                        left: "3%",
                        transform: "translate(3%, -50%)",
                        backgroundColor: "white",
                        zIndex: "1",

                    }}>密碼</span>
                    <input style={{
                        width: "100%",
                        height: "100%",
                        outline: "solid",
                        outlineColor: "black",
                        borderRadius: "15px",
                    }} className="" type="password" required="required" />
                </div>
                <button className="">登入</button>
            </form>
        </div>
    );
}

export default SignIn;