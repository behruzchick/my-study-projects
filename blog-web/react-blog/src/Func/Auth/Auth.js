import { toast } from "react-toastify";
import { supabase } from "../../CreateClient";


export const register = async (email, password, name, setLoading, setToken, navigate) => {
    try {
        if (email === "admin@gmail.com") {
            await supabase.auth.admin.createUser({
                email: email,
                password: password,
                user_metadata: { name: name },
                role: 'Admin'
            }).then((res) => {
                toast.success("Successfuly created admin user!")
            }).catch((e) => {
                console.log(e);
            })
        } else {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });
            if (error) {
                toast.error("Error in sign up! " + error.message);
            } else {
                // setLoading(false);
                console.log("successfuly registered new user!", data);
                setToken(data);
                navigate('/');
            }
        }
    } catch (error) {
        toast.error("Error in register!");
    }


}

export const login = async (email, password, navigate, setToken) => {
    // console.log({ email, password });
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Successfuly signed!");
            console.log(data);
            setToken(data);
            navigate('/');
        }
    } catch (error) {
        toast.error("Error in loggin!")
    }
}





// export const auth = async (event) => {
//     console.log(event);
//     try {
//         supabase.auth.onAuthStateChange(async (event) => {
//             if (event !== 'SIGNET_OUT') {

//             } else {

//             }
//         })



//     } catch (error) {
//         console.log(error);
//     }
// }


