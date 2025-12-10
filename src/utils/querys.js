import { collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase.js"; // tu instancia

export const getCajas = async () => {
        const ref = await getDocs(collection(db, "cajas"));
        const productos = ref.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    
    return productos;
}

export const getCamisetas = async () => {
        const ref = await getDocs(collection(db, "camisetas"));
        const productos = ref.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    
    return productos;
}

