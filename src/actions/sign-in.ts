// enables the function to run on the server
'use server'  

// imports authentication methods from the auth module
import * as auth from "@/auth"  

// defines an asynchronous function to handle user sign-in
export const signIn = async () => {  

    // calls the sign-in method from the auth module
    return auth.signIn();  
}
