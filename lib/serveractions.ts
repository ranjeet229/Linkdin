"use server"

import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server"
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

export const createPostAction = async (inputText:string, selectedFile: string) =>{
    const user = await currentUser();
    if(!user) throw new Error ('User not authenticated');
    if(!inputText) throw new Error ('Input field is required');

    const image = selectedFile;

    const userDatabase : IUser = {
        firstName : user.firstName || "Ranjeet",
        lastName : user.lastName || "Kumar",
        userId:user.id,
        profilePhoto:user.imageUrl
    }

    try {
        // create post with image
        if(image){
            await Post.create({
                description:inputText,
                user: userDatabase,
                imageUrl: // uyaha par image url ayega from cloudinary se
            })
        }else {
            //2. create post with text only 
            await Post.create({
                description:inputText,
                user:userDatabase
            })
        }

    } catch (error: any ) {
        throw new Error(error);
    }
}