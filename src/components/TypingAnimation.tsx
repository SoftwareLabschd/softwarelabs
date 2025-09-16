import { useEffect, useRef, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypingAnimation = ({ text, className = '', delay = 1000, speed = 100 }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      indexRef.current = 0;
      setDisplayText('');
      
      const typeWriter = () => {
        if (indexRef.current < text.length) {
          setDisplayText(text.substring(0, indexRef.current + 1));
          indexRef.current++;
          setTimeout(typeWriter, speed);
        } else {
          setIsTyping(false);
        }
      };
      
      setTimeout(typeWriter, delay);
    };

    startTyping();
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypingAnimation;