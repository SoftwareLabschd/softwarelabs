const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -50 }}>
      {/* Falling/floating orbs with enhanced animations */}
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/8 to-transparent animate-float-orb top-1/4 left-[8%]" style={{ animationDuration: '8s' }} />
      <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-purple-400/8 to-transparent animate-float-orb top-[60%] right-[20%]" style={{ animationDelay: '1s', animationDuration: '10s' }} />
      <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/8 to-transparent animate-float-orb bottom-1/3 left-1/3" style={{ animationDelay: '2s', animationDuration: '7s' }} />
      <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-pink-400/8 to-transparent animate-float-orb top-[15%] right-1/3" style={{ animationDelay: '1.5s', animationDuration: '9s' }} />
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-green-400/8 to-transparent animate-float-orb bottom-1/4 right-[15%]" style={{ animationDelay: '2.5s', animationDuration: '11s' }} />
      
      {/* Additional falling particles */}
      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-b from-primary/10 to-transparent animate-fall top-0 left-[15%]" style={{ animationDelay: '0s' }} />
      <div className="absolute w-12 h-12 rounded-full bg-gradient-to-b from-primary/10 to-transparent animate-fall top-0 left-[45%]" style={{ animationDelay: '3s' }} />
      <div className="absolute w-20 h-20 rounded-full bg-gradient-to-b from-primary/10 to-transparent animate-fall top-0 right-[25%]" style={{ animationDelay: '6s' }} />
    </div>
  );
};

export default FloatingOrbs;