import { Gamepad2, Trophy, Coins, TrendingUp, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Gamepad2,
    title: "Play Games",
    description: "Join multiplayer games and compete with players worldwide in exciting challenges and tournaments.",
    details: {
      process: "Connect your wallet, browse available games, and jump into matches. Our platform hosts various game modes from battle royale to puzzle challenges, all designed to reward skill and dedication.",
      features: ["20+ game modes", "Real-time matchmaking", "Cross-platform play", "Anti-cheat enabled"],
      time: "Start playing in under 2 minutes"
    }
  },
  {
    icon: Trophy,
    title: "Earn Achievements",
    description: "Complete milestones and unlock achievements through gameplay. Each achievement is recorded on-chain.",
    details: {
      process: "As you play, the system tracks your progress and automatically records achievements on the blockchain. From first wins to legendary milestones, every accomplishment is permanently verified.",
      features: ["50+ unique achievements", "Rarity tiers", "On-chain verification", "Progress tracking"],
      time: "First achievement in ~10 minutes"
    }
  },
  {
    icon: Coins,
    title: "Mint NFT Rewards",
    description: "Achievements automatically trigger smart contracts that mint unique NFT rewards directly to your wallet.",
    details: {
      process: "When you unlock an achievement, smart contracts automatically initiate NFT minting. Each NFT is uniquely generated with metadata reflecting your specific accomplishment, then sent directly to your connected wallet.",
      features: ["Auto-minting", "Unique artwork", "Rarity attributes", "Immediate delivery"],
      time: "NFT arrives within 30 seconds"
    }
  },
  {
    icon: TrendingUp,
    title: "Trade & Showcase",
    description: "Trade your NFTs on the marketplace, showcase your collection, or hold them as permanent proof of your gaming prowess.",
    details: {
      process: "List your NFTs on our integrated marketplace with custom pricing. Browse other players' collections, make offers, or showcase your achievements in your public profile gallery.",
      features: ["Zero listing fees", "Instant trading", "Public galleries", "Price analytics"],
      time: "Trade anytime, 24/7"
    }
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

        <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AccordionItem 
                key={index} 
                value={`step-${index}`}
                className="bg-gradient-card backdrop-blur-sm border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div className="w-14 h-14 rounded-full bg-gradient-card border-2 border-primary/30 flex items-center justify-center shadow-glow">
                        <Icon className="w-7 h-7 text-primary-glow" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 space-y-4">
                  <div className="pl-[72px] space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.details.process}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="justify-center py-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
                      <span className="text-sm font-semibold text-primary-glow">⏱️ {step.details.time}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Visual Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-card border-2 border-primary/30 flex items-center justify-center shadow-glow">
                      <Icon className="w-8 h-8 text-primary-glow" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm">{step.title}</h4>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-accent/50" />
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
