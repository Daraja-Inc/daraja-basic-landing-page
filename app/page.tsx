import Hero from "./components/Hero";
import PillarsSection from "./components/PillarsSection";
import ManifestoSection from "./components/ManifestoSection";

export default function Home({
  searchParams,
}: {
  searchParams: { name?: string };
}) {
  // Normalisation du nom
  const rawName = searchParams.name || "";
  const trimmedName = rawName.trim();
  const normalizedName = trimmedName
    ? trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase()
    : "toi";

  return (
    <>
      <Hero name={normalizedName} />
      <PillarsSection />
      <ManifestoSection />
    </>
  );
}
