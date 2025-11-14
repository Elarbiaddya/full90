import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { validation } from "../utils/validationForm";
import { useDebouncedCallback } from "use-debounce";
import FormInput from "./NewFormInput";
import { UserContext } from "../contexts/ContextUser";
import { useNavigate } from "react-router-dom";
import styles from "../pages/modules/login.module.css";

function SignInForm() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPasswd, setErrorPasswd] = useState(null);

  const debounceEmail = useDebouncedCallback((currentEmail) => {
    if (!validation.isValidEmail(currentEmail)) {
      setErrorEmail("email incorrecto");
    } else {
      setErrorEmail(null);
    }
  }, 3000);

  const handleEmail = (event) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
    debounceEmail(currentEmail);
  };

  const debouncePasswd = useDebouncedCallback((currentPasswd) => {
    if (!validation.isValidPassword(currentPasswd)) {
      setErrorPasswd("contraseña incorrecta");
    } else {
      setErrorPasswd(null);
    }
  }, 3000);

  const handlePasswd = (event) => {
    const currentPasswd = event.target.value;
    setPasswd(currentPasswd);
    debouncePasswd(currentPasswd);
    //debouncePasswd(passwd);
  };

  const handleGoogle = async () => {
    try {
      const responseAuth = await signInWithGooglePopup();

      console.log("respuesta auth", responseAuth);

      const responseDatabase = await createUserDocumentFromAuth(
        responseAuth.user,
        {
          rol: "admin",
        }
      );
      console.log("respuesta dabatase", responseDatabase);
    } catch (exception) {
      console.error("movida error", exception);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, passwd);
      console.log(response);
      setCurrentUser(response);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
  <div className={styles["login-container"]}>
    <div className={styles["login-logo"]}>LOGO</div>
    <h2 className={styles["login-title"]}>Iniciar sesión</h2>
    <form onSubmit={handleSubmit} className={styles["login-form"]}>

      <FormInput
        className={styles["login-input"]}
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmail}
        error={errorEmail}
        required
      />

      <FormInput
        className={styles["login-input"]}
        id="passwd"
        type="password"
        value={passwd}
        onChange={handlePasswd}
        error={errorPasswd}
        required
      />

      <div className={styles["login-buttons"]}>
        <button type="submit" className={styles["login-button"]}>
        Continuar
        </button>

        <button
          type="button"
          className={styles["login-google-button"]}
          onClick={handleGoogle}
        >
          Iniciar con Google
        </button>
      </div>
    </form>

    <p className={styles["login-footer"]}>
      ¿No tienes cuenta?
      <a href="/register"> Regístrate</a>
    </p>
  </div>
);

}

export default SignInForm;