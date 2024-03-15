import { Post } from "@/libs/models";
import { connectToDb } from "@/libs/utils";
import { NextResponse } from "next/server";

export const GET = async(request,{params})=>{
    const {slug} = params;
    console.log('parammms------',slug);
try {
    connectToDb()
    const post = await Post.findOne({slug})
    return NextResponse.json(post);
} catch (error) {
    console.log(error);
}
}