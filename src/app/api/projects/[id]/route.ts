import { NextResponse } from "next/server";
import data from "../../../data/portfolio.json";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const project = data.find((x) => x.id.toString() === params.id);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}

// import { NextResponse } from "next/server";
// import data from "../../../data/portfolio.json";

// export async function GET(
//   request: Request,
//   context: { params: { id: string } }
// ) {
//   const { params } = context;
//   const user = data.filter((x) => params.id === x.id.toString());

//   return NextResponse.json(user);
// }