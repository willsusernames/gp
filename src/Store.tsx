import { useEffect, useState } from "react";

function Store() {
  const message = "WELCOME TO THE STORE";
  const [revealed, setRevealed] = useState<string[]>(Array(message.length).fill(""));

  useEffect(() => {
    let indices = Array.from({ length: message.length }, (_, i) => i);
    let current = [...revealed];

    function revealNext() {
      if (indices.length === 0) return;
      const randomIdx = Math.floor(Math.random() * indices.length);
      const letterIdx = indices.splice(randomIdx, 1)[0];
      current[letterIdx] = message[letterIdx];
      setRevealed([...current]);
      if (indices.length > 0) {
        setTimeout(revealNext, 100); // Adjust speed here (ms)
      }
    }

    revealNext();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span className="girl-pervert-title" style={{ fontSize: "4vw" }}>
        {revealed.map((char, i) =>
          <span key={i} style={{ opacity: char ? 1 : 0 }}>{char === " " ? "\u00A0" : char}</span>
        )}
      </span>
    </div>
  );
}

export default Store;