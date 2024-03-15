import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ cookies, request, redirect }) => {
    const formData = await request.formData();
    console.log(formData);
    console.log(request);
    const email = formData.get("mensaje")?.toString();
    console.log(email);
    
    
    console.log(request.url.split('?')[1]);

    
    
    return redirect("/dashboard");
};