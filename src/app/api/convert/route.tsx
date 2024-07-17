import asc from "assemblyscript/asc";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const query = new URLSearchParams(new URL(req.url).search);
  const code = query.get('code');

  if (!code) {
    return new Response("Missing 'code' parameter.", { status: 400 });
  }

  console.log(`Compiling code: ${code}`);

  const { error, binary } = await asc.compileString(code, { optimize: true });

  if (error) {
    console.error("Compilation error:", error);
    return new Response("Failed to compile AssemblyScript code.", { status: 500 });
  }

  const blob = new Blob([binary as Uint8Array], { type: 'application/wasm' });
  return new Response(blob, { headers: { 'Content-Type': 'application/wasm' } });
}
