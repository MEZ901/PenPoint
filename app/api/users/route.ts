import { connectToDB } from "@/db/database";
import User from "@models/User";

interface RequestBody {
  email: string;
  username: string;
  image: string;
}

export const POST = async (req: Request, res: Response) => {
  const { email, username, image } = (await req.json()) as RequestBody;

  try {
    await connectToDB();
    const newUser = new User({
      email,
      username,
      image,
    });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response(`Failed to create a new user: ${error}`, {
      status: 500,
    });
  }
};
