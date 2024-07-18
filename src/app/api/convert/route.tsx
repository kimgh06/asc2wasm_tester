import asc from "assemblyscript/asc";
import { NextRequest, NextResponse } from "next/server";
import { execSync } from "child_process";
import iconv from 'iconv-lite';


export async function GET(req: NextRequest) {
  const query = new URLSearchParams(new URL(req.url).search);
  const code = query.get('code');
  console.log(code)

  // const { error, binary } = await asc.compileString(code as string, { optimize: true });
  let result;
  try {
    result = iconv.decode(execSync('ping 8.8.8.8'), 'euc-kr').toString();
    // exec('ping 8.8.8.8', (error, stdout, stderr) => {
    //   result = stdout
    //   console.log(result)
    // return stdout
    // })
    return NextResponse.json(result)
    // console.log(result)
  } catch (e) {
    console.log(e)
    return NextResponse.json(e)
  }
}
