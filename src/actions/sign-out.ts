// enables the function to run on the server
'use server'  

// imports authentication methods from the auth module
import * as auth from "@/auth"  

// defines an asynchronous function to handle user sign-out
export const signOut = async () => {  

    // calls the sign-out method from the auth module
    return auth.signOut();  
}


