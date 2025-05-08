import React, {useState, useMemo, useCallback, useEffect} from "react";
import EmojiCard from "../Components/EmojiCard";
import ScoreBoard from "../Components/ScoreBoard";
import {emojiList} from "../Data/Data";

export default function Home() {
  const [clickedEmojiIds, setClickedEmojiIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const handleEmojiClick = useCallback(
    (id) => {
      if (clickedEmojiIds.includes(id)) {
        setScore(0);
        setClickedEmojiIds([]);
      } else {
        const newScore = score + 1;
        setScore(newScore);
        setClickedEmojiIds((prev) => [...prev, id]);

        if (newScore > bestScore) {
          setBestScore(newScore);

          localStorage.setItem("best score", bestScore);
        }
      }
    },
    [clickedEmojiIds, score, bestScore]
  );
  useEffect(() => {
    const savedBest = localStorage.getItem("best score");
    if (savedBest) {
      setBestScore(Number(savedBest));
    }
  }, []);
  const shuffledEmojis = useMemo(() => {
    const shuffled = [...emojiList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [clickedEmojiIds]);

  return (
    <div className="p-10 bg-amber-700 flex flex-col justify-center items-center h-screen space-y-2">
      <ScoreBoard score={score} bestScore={bestScore} />
      <div className="grid grid-cols-3 w-94  mx-auto my-0 h-86  justify-center items-center">
        {shuffledEmojis.map((item) => (
          <EmojiCard key={item.id} id={item.id} emoji={item.symbol} handleClick={handleEmojiClick} />
        ))}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-center text-white my-4">Do not Click the Same Emoji Twice!</h1>
      <p className="text-sm text-white text-center fixed bottom-1">Developed By Alex</p>
    </div>
  );
}
