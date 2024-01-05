import Delay from "../utils/Delay";


export async function GET(url: string) {
  await Delay(500);
  const response = await fetch(url);
  const result = await response.json();

  return result;
}
