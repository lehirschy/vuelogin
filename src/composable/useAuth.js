import { ref } from "vue";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from "./useFirebase";
import { async } from "@firebase/util";

const isAuthenticated = ref(false);

const user = ref("");

const useAuth = () => {
    const login = async (username, password) => {
        const res = await signInWithEmailAndPassword(firebaseAuth, username, password);
    
        if (res.user){
            isAuthenticated.value = true;
            user.value = res.user.email;
        }
    };
    const signup = async (username, password) => {
        const res = await createUserWithEmailAndPassword(firebaseAuth, username, password);
    
        if (res.user){
            isAuthenticated.value = true;
            user.value = res.user.email;
        }
    };
    const logout = async () => {
        await signOut(firebaseAuth)
        isAuthenticated.value = false;
        user.value = "";
    };
                  
    return { isAuthenticated, signup, login, logout, user };
};
                  
export default useAuth;

