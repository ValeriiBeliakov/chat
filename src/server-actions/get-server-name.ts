'use server'
import { headers } from "next/headers";

export const getServerPathName = async ()=>{
    const headersList = await headers();
    const headerUrl = headersList.get("referer");

    const currentPathName = "/" + headerUrl?.split('/').slice(3).join('/');
    return currentPathName;
}