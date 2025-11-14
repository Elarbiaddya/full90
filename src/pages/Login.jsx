import styles from "./login.module.css"
import SignInForm from "../components/SignInForm_useState"

function Login() {
    return (
        <main className={styles.main}>
            <SignInForm />
        </main>
    )
}

export default Login;