import DynamicImage from "@/app/myComponents/dynamicImage/DynamicImage";
export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";

  const title = `${groupName} - Numora`;
  const description = "Add, track, and split expenses with your friends";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://www.yourSite/dynamic",
      type: "website",
      images: [
        {
          url: `/api/og/dynamicS?groupName=${groupName}`,
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
