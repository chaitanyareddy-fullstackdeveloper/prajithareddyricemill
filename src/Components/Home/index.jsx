import React, { useState, useEffect } from "react";
import "./index.css";

export default function Home() {
  const lines = [
    "Hello User",
    "Welcome to Prajitha Reddy Rice Stores — where purity meets tradition and perfection! Here, you’ll find the finest HandPicked quality of BPT rice sourced directly from the hardworking hands of our farmers.",
    "We don’t just buy Paddy from Farmmer — we visit farms, walk the fields, and handpick grains that pass our strict quality checks. No middlemen, no shortcuts. Just premium rice straight from the land to your kitchen.",
    "Every grain is a promise — fresh, natural, and full of flavor. Because we believe that what you eat should be as authentic and honest as the people who grow it.",
    "From the farm to your plate, trust Prajitha Reddy Rice Stores for quality you can see, taste, and trust."
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);


  const TYPING_SPEED = 40; 
  const LINE_PAUSE = 700;

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const currentText = lines[currentLine];

    
    if (charIndex < currentText.length) {
      const t = setTimeout(() => {
        setCharIndex((ci) => ci + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    }

     const pause = setTimeout(() => {
      setCurrentLine((cl) => cl + 1);
      setCharIndex(0);
    }, LINE_PAUSE);

    return () => clearTimeout(pause);
  }, [charIndex, currentLine, lines]);

  return (
    <div className="home-container">
      {lines.map((line, i) => {
        if (i < currentLine) {
          return (
            <div key={i} className="line-style">
              {line}
            </div>
          );
        }

        
        if (i === currentLine) {
          const visibleText = line.slice(0, charIndex);
          return (
            <div key={i} className="line-style typing">
              {visibleText}
              <span className="caret" />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
