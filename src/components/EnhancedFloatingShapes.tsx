const EnhancedFloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -40 }}>
      {/* Geometric floating shapes with enhanced animations */}
      <div 
        className="absolute w-20 h-20 rounded-full animate-float-enhanced opacity-15"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--tech-green)), transparent)',
          top: '20%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '8s'
        }}
      />
      <div 
        className="absolute w-32 h-32 rounded-full animate-float-enhanced opacity-15"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--tech-pink)), transparent)',
          top: '60%',
          right: '10%',
          animationDelay: '2s',
          animationDuration: '10s'
        }}
      />
      <div 
        className="absolute w-16 h-16 rounded-full animate-float-enhanced opacity-15"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--cyber-purple)), transparent)',
          bottom: '20%',
          left: '20%',
          animationDelay: '4s',
          animationDuration: '9s'
        }}
      />
      
      {/* Additional geometric shapes */}
      <div 
        className="absolute w-12 h-12 rotate-45 animate-float-enhanced opacity-15"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--neural-blue)), transparent)',
          top: '40%',
          left: '70%',
          animationDelay: '1s',
          animationDuration: '7s'
        }}
      />
      <div 
        className="absolute w-24 h-24 animate-float-enhanced opacity-15"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--tech-green)), transparent)',
          bottom: '40%',
          right: '25%',
          animationDelay: '3s',
          animationDuration: '8s',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
      
      {/* Falling geometric shapes */}
      <div 
        className="absolute w-8 h-8 rotate-45 animate-fall opacity-20"
        style={{
          background: 'hsl(var(--primary))',
          top: '-20px',
          left: '30%',
          animationDelay: '0s'
        }}
      />
      <div 
        className="absolute w-6 h-6 rounded-full animate-fall opacity-20"
        style={{
          background: 'hsl(var(--cyber-purple))',
          top: '-20px',
          left: '60%',
          animationDelay: '4s'
        }}
      />
      <div 
        className="absolute w-10 h-10 animate-fall opacity-20"
        style={{
          background: 'hsl(var(--neural-blue))',
          top: '-20px',
          right: '20%',
          animationDelay: '8s',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
    </div>
  );
};

export default EnhancedFloatingShapes;