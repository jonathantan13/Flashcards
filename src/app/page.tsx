import FlashCardPreview from "@/components/FlashcardPreview";
import InputComponent from "@/components/InputComponent";

export default function HomePage() {
  // Dynamically render

  return (
    <>
      <InputComponent />
      <div className="my-8 grid grid-cols-3 gap-8">
        <FlashCardPreview title="Biology" length="10" />
        <FlashCardPreview title="Physics" length="10" />
        <FlashCardPreview title="English words" length="21" />
        <FlashCardPreview title="Networking" length="31" />
      </div>
    </>
  );
}
