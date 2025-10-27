import { Button } from "@/components/ui/button";
import { Sparkles, Trophy, Shield } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const Hero = () => {
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

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
              <div className="text-sm text-muted-foreground">True Ownership</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Permanent Assets</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">On-Chain Trading</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
