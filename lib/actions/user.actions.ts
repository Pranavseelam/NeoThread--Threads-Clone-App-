"use server"


import path from "path";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"
import { revalidatePath } from "next/cache";


interface Params{
    userId: string,
    username: string,
    name: string,
    bio:string,
    image:string,
    path:string
}

export async function updateUser({
    userId,
    username,
    name,
    bio,
    image,
    path,
    }:Params): Promise<void> {
    connectToDB();
    try {
        await User.findOneAndUpdate(
            {id: userId},
            {
                username:username.toLowerCase(),
                name,
                bio,
                image,
                onboarded: true,
            },
            {upsert: true},
        );
    
        if(path === 'profile/edit'){
            revalidatePath(path);
        }
    } catch (error : any) {
        throw new Error(`Failed to create/update user: ${error.message}`);

        
    }
}

export async function fetchUser(userId: string){
    try {
        connectToDB();
        return await User
        .findOne({id: userId})
        // .populate({
        //     path:'communities',
        //     model:'Community'
        // })
    } catch (error: any) {
        throw new Error(`Failed to fetch the User: ${error.message}`);
    }
}

