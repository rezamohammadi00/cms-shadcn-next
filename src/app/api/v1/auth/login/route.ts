export async function POST(request: Request) {
  const res = await request.json();

  return Response.json({ ...res, accessToken: "11111112223" });
}
