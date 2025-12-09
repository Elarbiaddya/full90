import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import  productos  from "../data/cajas";

export const uploadCajas = async () => {
    try {
        const productsRef = collection(db, "cajas");

        for (const prod of productos) {
            const docRef = doc(productsRef, `box${String(prod.id)}`);
            await setDoc(docRef, prod);
        }
    } catch (error) {
        console.error("Error al subir cajas", error);
    }
}

export const uploadCamisetas = async () => {
    try {
        const productsRef = collection(db, "camisetas");

        for (const prod of productos) {
            const docRef = doc(productsRef, `camiseta${String(prod.id)}`);
            await setDoc(docRef, prod);
        }
    } catch (error) {
        console.error("Error al subir camisetas", error);
    }
}