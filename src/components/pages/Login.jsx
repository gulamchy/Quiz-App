import Illustration from "../Illustration";
import loginImage from "../../assets/login.svg"
import classes from "../../styles/Login.module.css"
import Form from "../Form";
import Button from "../Button";
import TextInput from "../TextInput";

export default function Login(){
    return(
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={loginImage}/>
                <Form className={`${classes.login}`}>
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email"/>
                    <TextInput type="password" placeholder="Enter password" icon="lock"/>
                    <Button>Submit Now</Button>
                    <div className="info">
                    Don't have an account?
                        <a href="#">Signup</a>{" "}instead.
                    </div>
                </Form>
            </div>
        </>
    );
}