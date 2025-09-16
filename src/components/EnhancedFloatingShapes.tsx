const EnhancedFloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-15]">
      {/* Geometric floating shapes with enhanced animations */}
      <div 
        className="absolute w-20 h-20 rounded-full animate-float-enhanced opacity-10"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--tech-green)), transparent)',
          top: '20%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '6s'
        }}
      />
      <div 
        className="absolute w-32 h-32 rounded-full animate-float-enhanced opacity-10"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--tech-pink)), transparent)',
          top: '60%',
          right: '10%',
          animationDelay: '2s',
          animationDuration: '8s'
        }}
      />
      <div 
        className="absolute w-16 h-16 rounded-full animate-float-enhanced opacity-10"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--cyber-purple)), transparent)',
          bottom: '20%',
          left: '20%',
          animationDelay: '4s',
          animationDuration: '7s'
        }}
      />
      
      {/* Additional geometric shapes */}
      <div 
        className="absolute w-12 h-12 rotate-45 animate-float-enhanced opacity-10"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--neural-blue)), transparent)',
          top: '40%',
          left: '70%',
          animationDelay: '1s',
          animationDuration: '5s'
        }}
      />
      <div 
        className="absolute w-24 h-24 animate-float-enhanced opacity-10"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--tech-green)), transparent)',
          bottom: '40%',
          right: '25%',
          animationDelay: '3s',
          animationDuration: '6s',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
    </div>
  );
};

export default EnhancedFloatingShapes;