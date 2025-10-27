import { Button } from "@/components/ui/button";
import { Sparkles, Trophy, Shield, Users, Award, Coins } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-gaming.jpg";

const Hero = () => {
  const [stats, setStats] = useState({ players: 0, nfts: 0, volume: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { players: 15847, nfts: 8234, volume: 2.4 };
    let current = { players: 0, nfts: 0, volume: 0 };

    const timer = setInterval(() => {
      current = {
        players: Math.min(current.players + Math.ceil(targets.players / steps), targets.players),
        nfts: Math.min(current.nfts + Math.ceil(targets.nfts / steps), targets.nfts),
        volume: Math.min(current.volume + (targets.volume / steps), targets.volume),
      };
      setStats(current);

      if (current.players === targets.players) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Blockchain gaming platform with NFT rewards"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary-glow" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Powered by Hedera Network</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-glow">
            Earn NFT Rewards
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              That Truly Belong to You
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The first multiplayer gaming platform where your achievements become permanent NFT assets on Hedera blockchain. Play, earn, and truly own your rewards forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg">
              <Trophy className="w-5 h-5" />
              Start Playing
            </Button>
            <Button variant="heroOutline" size="lg" className="text-lg">
              <Shield className="w-5 h-5" />
              Learn More
            </Button>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:scale-105 transition-transform cursor-default">
              <Users className="w-8 h-8 text-primary-glow mb-3 mx-auto" />
              <div className="text-3xl font-bold text-primary-glow mb-2">{stats.players.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Active Players</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:scale-105 transition-transform cursor-default">
              <Award className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-3xl font-bold text-accent mb-2">{stats.nfts.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">NFTs Minted</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:scale-105 transition-transform cursor-default">
              <Coins className="w-8 h-8 text-secondary mb-3 mx-auto" />
              <div className="text-3xl font-bold text-secondary mb-2">${stats.volume.toFixed(1)}M</div>
              <div className="text-sm text-muted-foreground">Trading Volume</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
