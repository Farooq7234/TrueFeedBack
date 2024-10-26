import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";

export async function POST(request: Request) {
  await dbConnect();

  const session = await getServerSession(authOptions);
  const user: User = session?.user as User;

  // session not found means below response will send

  if (!session || !session.user) {
    return Response.json(
      {
        success: false,
        message: "Not Authenticated",
      },
      { status: 401 }
    );
  }

  // Extracting id from user which comes from the session

  const userId = user._id;
  const { acceptMesagge } = await request.json();

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { isAcceptingMessage: acceptMesagge },
      { new: true }
    );

    if (!updatedUser) {
      return Response.json(
        {
          success: false,
          message: "Failed to update user status to accept messages",
        },
        { status: 401 }
      );
    }
    return Response.json(
      {
        success: true,
        message: "Message acceptance status updated successfully",
        updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Failed to update user status to accept messages");
    return Response.json(
      {
        success: false,
        message: "Failed to update user status to accept messages",
      },
      { status: 500 }
    );
  }
}


export async function GET(request:Request){
    await dbConnect();

  const session = await getServerSession(authOptions);
  const user: User = session?.user as User;

  // session not found means below response will send

  if (!session || !session.user) {
    return Response.json(
      {
        success: false,
        message: "Not Authenticated",
      },
      { status: 401 }
    );
  }

  // Extracting id from user which comes from the session

  const userId = user._id;
  
  try {
    const foundUser = await UserModel.findById(userId)
    if (!foundUser) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }
  
    return Response.json(
      {
        success: true,
        message: "User found",
        isAcceptingMessages:foundUser.isAcceptingMessage
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in getting message acceptance");
    return Response.json(
      {
        success: false,
        message: "Error in getting message acceptance",
      },
      { status: 500 }
    );
  }
}
