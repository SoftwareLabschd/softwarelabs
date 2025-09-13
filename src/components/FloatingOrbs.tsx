const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/10 to-transparent animate-float-orb top-1/4 left-1/12" />
      <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-purple-400/10 to-transparent animate-float-orb top-3/5 right-1/5 delay-1000" />
      <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/10 to-transparent animate-float-orb bottom-1/3 left-1/3 delay-2000" />
      <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-pink-400/10 to-transparent animate-float-orb top-1/6 right-1/3 delay-1000" />
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-green-400/10 to-transparent animate-float-orb bottom-1/4 right-1/6 delay-2000" />
    </div>
  );
};

export default FloatingOrbs;