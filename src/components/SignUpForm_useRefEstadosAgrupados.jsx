import { useState, useRef } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { validation } from "../utils/validationForm";
import { useDebouncedCallback } from "use-debounce";
import FormInput from "./NewFormInput";
import { useNavigate } from "react-router-dom";
import styles from "../pages/modules/registro.module.css";

function SignUpFormEstadosAgrupados() {
  const emailRef = useRef(null);
  const displayNameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  const [serverError, setServerError] = useState(null);

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    displayName: null,
  });

  const debounceEmail = useDebouncedCallback(() => {
    setErrors((prev) => ({
      ...prev,
      email: validation.isValidEmail(emailRef.current.value)
        ? null
        : "Email incorrecto",
    }));
  }, 3000);

  const debouncePasswd = useDebouncedCallback(() => {
    setErrors((prev) => ({
      ...prev,
      password: validation.isValidPassword(passwordRef.current.value)
        ? null
        : "Contraseña incorrecta",
    }));
  }, 3000);

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (serverError) setServerError(null);

    const name = displayNameRef.current.value.trim();
    if (!name) {
      setErrors((prev) => ({
        ...prev,
        displayName: "Nombre no puede estar vacío",
      }));
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrors((prev) => ({
        ...prev,
        password: "Las contraseñas no coinciden",
      }));
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );

      await createUserDocumentFromAuth(user, {
        displayName: displayNameRef.current.value,
        rol: "user",
      });

      console.log("User created:", user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setServerError("El email ya está registrado");
      } else if (error.code === "auth/weak-password") {
        setServerError("La contraseña es demasiado débil");
      } else {
        setServerError("Error inesperado al registrar usuario");
        console.error(error);
      }
    }
  };

  const handleBack = () => {
    navigate(-1); // Va a la página anterior en el historial
  };

  return (
    <>
      {serverError && <p className="error">{serverError}</p>}
      <main className={styles["login-main"]}>
        <div className={styles["login-container"]}>
          <div className={styles["login-logo"]}>LOGO</div>
          <h2 className={styles["login-title"]}>Registro</h2>
          <form onSubmit={handleSignUp} className={styles["login-form"]}>
            <FormInput
              className={styles["login-input"]}
              id="email"
              type="email"
              placeholder="Email"
              ref={emailRef}
              onChange={debounceEmail}
              error={errors.email}
              required
            />

            <FormInput
              className={styles["login-input"]}
              id="displayName"
              type="text"
              placeholder="Nombre"
              ref={displayNameRef}
              error={errors.displayName}
              required
            />

            <FormInput
              className={styles["login-input"]}
              id="passwd"
              type="password"
              placeholder="Contraseña"
              ref={passwordRef}
              onChange={debouncePasswd}
              error={errors.password}
              required
            />

            <FormInput
              className={styles["login-input"]}
              id="confirmPassword"
              type="password"
              placeholder="Confirmar contraseña"
              ref={confirmPasswordRef}
              required
            />

            <div className={styles["login-buttons"]}>
              <button type="submit" className={styles["login-button"]}>
                Continuar
              </button>

              <button
                type="button"
                className={styles["login-footer"]}
                onClick={handleBack}
              >
                Volver
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default SignUpFormEstadosAgrupados;
