import analytics from "./analytics";

export async function GET() {
  return Response.json(analytics);
}
