export default function EmojiCard({emoji, id, handleClick}) {
  return (
    <div onClick={() => handleClick(id)} className="h-20 w-30 border-2 rounded-sm bg-amber-100 flex items-center justify-center">
      <span className="text-3xl">{emoji}</span>
    </div>
  );
}
