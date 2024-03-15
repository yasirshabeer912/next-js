"use server"

import { Post, User } from "./models";
export const addPost = async (formData) =>{
    const {title,description,slug,userId} = Object.fromEntries(formData)
    console.log(title,description,slug,userId);
}