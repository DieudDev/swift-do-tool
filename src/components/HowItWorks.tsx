import { Gamepad2, Trophy, Coins, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Gamepad2,
    title: "Play Games",
    description: "Join multiplayer games and compete with players worldwide in exciting challenges and tournaments.",
  },
  {
    icon: Trophy,
    title: "Earn Achievements",
    description: "Complete milestones and unlock achievements through gameplay. Each achievement is recorded on-chain.",
  },
  {
    icon: Coins,
    title: "Mint NFT Rewards",
    description: "Achievements automatically trigger smart contracts that mint unique NFT rewards directly to your wallet.",
  },
  {
    icon: TrendingUp,
    title: "Trade & Showcase",
    description: "Trade your NFTs on the marketplace, showcase your collection, or hold them as permanent proof of your gaming prowess.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-50" />
      
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to start earning NFT rewards that you truly own
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    {/* Icon Container */}
                    <div className="w-20 h-20 rounded-full bg-gradient-card backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center shadow-glow">
                      <Icon className="w-10 h-10 text-primary-glow" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-accent/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
