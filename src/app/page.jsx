import DynamicImage from "@/app/myComponents/dynamicImage/DynamicImage";

// sending data to OG image
export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";

  return {
    openGraph: {
      images: [
        {
          url: `/api/og/dynamic?groupName=${groupName}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// sending data to component
export default async function Home({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";
  return (
    <div className="">
      <DynamicImage groupName={groupName} />
    </div>
  );
}
