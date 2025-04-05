 "use server";

import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

interface Params {
  text: string;
  author: string; 
  communityId: string | null;
  path: string; 
  parentId: string;
}



export async function createThread({ text, author, communityId, path }: Params) {
    try {
      connectToDB();
  
      
      const createdThread = await Thread.create({
        text,
        author, 
        community:  null, 
      });
  

      await User.findByIdAndUpdate(author, {
        $push: { threads: createdThread._id },
      });
  
  
      revalidatePath(path);
    } catch (error: any) {
      throw new Error(`Error Creating thread: ${error.message}`);
    }
  }


export async function fetchPost(parentId: string) {

  try {

    connectToDB();
    return await Thread
    .findOne({parentId: parentId})

  }
 
  catch (error: any) {

    throw new Error(`Cannot fetch Post: ${error.message}`);

  }

}