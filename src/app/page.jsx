import DynamicImage from "@/app/myComponents/dynamicImage/DynamicImage";
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

export default function Home() {
  return (
    <div className="">
      <DynamicImage />
    </div>
  );
}
