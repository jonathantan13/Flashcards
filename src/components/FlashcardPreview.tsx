interface FlashCardPreview {
  title: string;
  length: string;
}

export default function FlashCardPreview({ title, length }: FlashCardPreview) {
  // Fetch all flashcards
  // Should be a server component w/ revalidation whenever flashcard is edited

  return (
    <div className="flex h-48 w-72 flex-col justify-between rounded-bl-sm bg-blue-800 p-4 hover:cursor-grab hover:bg-blue-700">
      <div className="flex flex-col gap-2">
        <strong className="text-2xl">{title}</strong>
        <p>This is a description.</p>
      </div>
      <p>{length} cards</p>
    </div>
  );
}
