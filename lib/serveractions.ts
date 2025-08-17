"use server"

import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server"
import { v2 as cloudinary } from 'cloudinary'
import connectDB from "./db";

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

export const createPostAction = async (inputText:string, selectedFile: string) =>{
    await connectDB();
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
    let uploadResponse;
    try {
        // create post with image
        if(image){
            uploadResponse = await cloudinary.uploader.upload(image);
            await Post.create({
                description:inputText,
                user: userDatabase,
                imageUrl: uploadResponse?.secure_url// uyaha par image url ayega from cloudinary se
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