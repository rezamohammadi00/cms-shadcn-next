import users from "@/app/api/v1/users/users";

export async function GET() {
  return Response.json(users);
}
