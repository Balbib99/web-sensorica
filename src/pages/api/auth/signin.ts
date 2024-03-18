import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    // const formData = await request.formData();
    // const email = formData.get("email")?.toString();
    // const password = formData.get("password")?.toString();

    // if (!email || !password) {
    //     console.log("Se requieren password e email");
        
    //     return new Response("Email and password are required", { status: 400 });
    // }

    // const { data, error } = await supabase.auth.signInWithPassword({
    //     email,
    //     password,
    // });

    // if (error) {
    //     console.log("Hemos tenido un error en el signin");
        
    //     return new Response(error.message, { status: 500 });
    // }

    // const { access_token, refresh_token } = data.session;

    // console.log("access token: " + access_token);
    // console.log("refresh token: " + refresh_token);
    
    // cookies.set("sb-access-token", access_token, {
    //     path: "/",
    // });
    // cookies.set("sb-refresh-token", refresh_token, {
    //     path: "/",
    // });

    return redirect("/dashboard");
};