import { ImageResponse } from "next/og";
import DynamicImageOg from "./DynamicImageOg";

export const runtime = "edge"; // OG images must run on edge

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  // Read groupName from URL
  const groupName = searchParams.get("groupName") || "Your Group";
  // Convert the URL string into a URL object
  // const url = new URL(req.url);
  // const searchParams = url.searchParams;

  // Return OG Image
  return new ImageResponse(<DynamicImageOg groupName={groupName} />, {
    width: 1200,
    height: 630,
  });
}
