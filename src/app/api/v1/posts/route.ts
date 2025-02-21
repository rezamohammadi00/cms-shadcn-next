import posts from "@/app/api/v1/posts/posts";

export async function GET() {
  return Response.json(posts);
}
