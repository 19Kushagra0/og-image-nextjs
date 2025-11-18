import DynamicImage from "@/app/myComponents/dynamicImage/DynamicImage";
export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";

  const title = `${groupName} - Numora`;
  const description = "Add, track, and split expenses with your friends";

  // --- 1. Define the Base URL ---
  // This is CRITICAL. It ensures the URL starts with https://yourdomain.com/
  // Uses environment variable for production and localhost for development.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // --- 2. Define the Relative Path ---
  // Using the requested path: /api/og/join-group
  const ogImagePath = `/api/og/join-group?groupName=${encodeURIComponent(
    groupName
  )}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      // The canonical URL of the page being shared
      url: "https://www.getnumora.com/join-group",
      type: "website",
      images: [
        {
          // --- 3. Construct the Absolute URL ---
          // This combines the base URL and the relative path.
          url: `${baseUrl}${ogImagePath}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <div className="">
      <DynamicImage />
    </div>
  );
}
