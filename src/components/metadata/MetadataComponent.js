export const metadata = {
  title: "القرآن الكريم", 
  description: "القرآن الكريم",
};

export default function MetadataComponent() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
