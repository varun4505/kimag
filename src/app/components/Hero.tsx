import CardSwap, { Card } from './CardSwap';

const Hero = () => (
  <div
    style={{
      height: '600px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 4vw',
      boxSizing: 'border-box',
      gap: 0,
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto',
      background: '#fafdff',
      overflow: 'hidden',
      marginTop: '48px', // Reduced to move hero section up
    }}
  >
    {/* Background SVG grid and circles */}
    <svg
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      viewBox="0 0 1600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e3eef7" strokeWidth="1" />
        </pattern>
        <radialGradient id="radial1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="radial2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ff7eb3" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="600" fill="url(#grid)" />
      {/* Radial circles */}
      <circle cx="1200" cy="300" r="220" fill="url(#radial1)" />
      <circle cx="1200" cy="300" r="120" fill="url(#radial2)" />
      <circle cx="400" cy="100" r="120" fill="url(#radial1)" />
    </svg>
    {/* Left side text */}
    <div
      style={{
        flex: '0 0 800px',
        zIndex: 2,
        maxWidth: 800,
        minWidth: 350,
        background: 'transparent',
        borderRadius: '28px',
        boxShadow: 'none',
        padding: '0 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'relative',
        overflow: 'visible',
        justifyContent: 'center',
        height: '100%',
        marginTop: 0,
        alignSelf: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1.1,
          margin: 0,
          textShadow: '0 8px 32px rgba(44,82,130,0.18), 0 2px 8px rgba(0,0,0,0.12)',
          letterSpacing: '-0.01em',
          textAlign: 'left',
          filter: 'drop-shadow(0 2px 16px rgba(0,0,0,0.12))',
        }}
      >
        <span style={{
          display: 'block',
          fontSize: '3.5rem',
          fontWeight: 700,
          color: '#181f2a', // blackish
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
          textAlign: 'left',
          marginBottom: '0.2em',
        }}>
          We Shape Narratives.
        </span>
        <span style={{
          display: 'block',
          fontSize: '3.5rem',
          fontWeight: 700,
          color: 'transparent',
          background: 'linear-gradient(90deg, #14b8a6 0%, #4a90c2 50%, #b14fad 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          letterSpacing: '-0.01em',
          textAlign: 'left',
        }}>
          We Build Reputations.
        </span>
      </h1>
      <p
        style={{
          fontSize: '1.3rem',
          color: '#2d3748',
          maxWidth: 540,
          lineHeight: 1.7,
        margin: '12px 0 0 0',
          fontWeight: 500,
          opacity: 0.95,
          textShadow: '0 1px 2px rgba(0,0,0,0.02)',
        }}
      >
        India's leading integrated communications agency delivering strategic PR, corporate storytelling, and crisis leadership.
      </p>
      <button
        style={{
        marginTop: 12,
          padding: '14px 36px',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: '#14b8a6',
          background: '#fff',
          border: '2px solid #14b8a6',
          borderRadius: '999px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(44,82,130,0.12)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'color 0.3s, background 0.3s',
          width: 'fit-content',
          minWidth: 260,
          maxWidth: 340,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
        onMouseEnter={e => {
          const btn = e.currentTarget;
          btn.querySelector('.btn-bg').style.transform = 'translateY(0)';
          btn.querySelector('.btn-text').style.color = '#fff';
        }}
        onMouseLeave={e => {
          const btn = e.currentTarget;
          btn.querySelector('.btn-bg').style.transform = 'translateY(100%)';
          btn.querySelector('.btn-text').style.color = '#14b8a6';
        }}
      >
        <span
          className="btn-bg"
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(0deg, #14b8a6 0%, #2c5282 100%)',
            zIndex: 0,
            transform: 'translateY(100%)',
            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
        <span className="btn-text" style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', color: '#14b8a6', transition: 'color 0.3s' }}>
          Schedule a Consultation <span style={{marginLeft: 8}}>📅</span>
        </span>
      </button>
    </div>
    {/* Right side CardSwap */}
    <div
      style={{
        flex: 1,
        position: 'relative',
        minWidth: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        overflow: 'visible',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 640,
          height: 640,
          maxWidth: '100%',
          maxHeight: '100%',
          marginTop: -70,
        }}
      >
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          {/* Slide 1: Corporate Reputation */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding:'16px 0 8px 24px',textAlign:'left',color:'#2c5282',fontWeight:700,letterSpacing:0.3,fontSize:'1.1rem'}}>🛡️ Corporate Reputation</div>
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Corporate Reputation" style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          {/* Slide 2: Crisis Communication */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding:'16px 0 8px 24px',textAlign:'left',color:'#e91e63',fontWeight:700,letterSpacing:0.3,fontSize:'1.1rem'}}>📣 Crisis Communication</div>
            <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=600&q=80" alt="Crisis Communication" style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          {/* Slide 3: Brand Amplification */}
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding:'16px 0 8px 24px',textAlign:'left',color:'#4a90c2',fontWeight:700,letterSpacing:0.3,fontSize:'1.1rem'}}>💡 Brand Amplification</div>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Brand Amplification" style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding:'16px 0 8px 0',textAlign:'left',color:'#4a90c2',fontWeight:700,letterSpacing:0.3,fontSize:'1.1rem'}}>💡 Brand Amplification</div>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Brand Amplification" style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding:'16px 0 8px 0',textAlign:'left',color:'#4a90c2',fontWeight:700,letterSpacing:0.3,fontSize:'1.1rem'}}>💡 Brand Amplification</div>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Brand Amplification" style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
          <Card style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',background:'rgba(255,255,255,0.95)',padding:0,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
            <div style={{width:'100%',padding:'16px 0 8px 0',textAlign:'left',color:'#4a90c2',fontWeight:700,letterSpacing:0.3,fontSize:'1.1rem'}}>💡 Brand Amplification</div>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Brand Amplification" style={{width:'100%',height:'78%',objectFit:'cover',borderRadius:'0 0 18px 18px',marginTop:0}} />
          </Card>
        </CardSwap>
      </div>
    </div>
  </div>
);

export default Hero;