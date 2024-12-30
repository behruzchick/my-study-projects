import { supabase } from "../../createClient";

export const register = async (email,password) => {
    try {
        const {user,error} = await supabase
            .auth.signUp({
                email: email,
                password: password
            })

        if(error){
            throw error;
        }

        // const {data,error:profileError} = await
        // supabase
        // .from('users')
        // .update({
        //     uid:user.id,
        //     display_name:name
        // })

        // if(profileError){
        //     throw profileError;
        // }

        console.log("Success!",data);
    } catch (error) {
        console.log(error);
    }
}

export const login = async (email, password) => {
    try {
        await supabase
        .auth.signInWithPassword({
            email:email,
            password:password
        })
        .then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })
    } catch (error) {
        console.log(error);
    }
}
