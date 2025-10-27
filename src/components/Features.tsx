import { Card } from "@/components/ui/card";
import { Award, Database, Store, Cpu, Wallet, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "NFT Reward System",
    description: "Mint unique NFTs as rewards for player achievements and milestones. NFTs are securely stored on Hedera network for permanent ownership.",
  },
  {
    icon: Database,
    title: "Game Persistence",
    description: "Ensure players retain NFT assets and progress data even if the game server is offline or discontinued.",
  },
  {
    icon: Store,
    title: "Marketplace Integration",
    description: "Provide a platform for players to trade, sell, or showcase their NFTs with built-in marketplace functionality.",
  },
  {
    icon: Cpu,
    title: "Smart Contract Automation",
    description: "Automate reward issuance and NFT minting using smart contracts for transparent and efficient operations.",
  },
  {
    icon: Wallet,
    title: "Wallet Connectivity",
    description: "Allow players to connect popular crypto wallets (e.g., HashPack, MetaMask) for NFT management.",
  },
  {
    icon: BarChart3,
    title: "Transparent Leaderboard",
    description: "Implement a decentralized leaderboard on Hedera to track player rankings with verifiable data.",
  },
  {
    icon: ShieldCheck,
    title: "Security and Fairness",
    description: "Prevent cheating and fraudulent NFT minting through verifiable on-chain logic and secure protocols.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built on <span className="bg-gradient-primary bg-clip-text text-transparent">Hedera Blockchain</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leveraging enterprise-grade blockchain technology for secure, scalable, and sustainable gaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-card backdrop-blur-sm border-border p-6 hover:shadow-card transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary-glow" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
