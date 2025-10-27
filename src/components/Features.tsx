import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Award, Database, Store, Cpu, Wallet, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "NFT Reward System",
    description: "Mint unique NFTs as rewards for player achievements and milestones. NFTs are securely stored on Hedera network for permanent ownership.",
    details: {
      long: "Our advanced NFT reward system automatically mints unique, verifiable digital assets whenever you achieve significant milestones. Each NFT is cryptographically secured on the Hedera network, ensuring permanent ownership and authenticity.",
      benefits: ["Instant minting upon achievement", "Permanent ownership guarantee", "Tradeable on any marketplace", "Verifiable rarity and authenticity", "Low gas fees with Hedera"],
      stats: { minted: "8,234", value: "$1.2M", rarity: "Legendary to Common" }
    }
  },
  {
    icon: Database,
    title: "Game Persistence",
    description: "Ensure players retain NFT assets and progress data even if the game server is offline or discontinued.",
    details: {
      long: "Your gaming achievements are permanently stored on the blockchain. Unlike traditional games where progress disappears if servers shut down, your NFTs and achievements remain yours forever.",
      benefits: ["Blockchain-backed permanence", "Server-independent ownership", "Cross-platform compatibility", "Future-proof assets", "Exportable game data"],
      stats: { uptime: "99.99%", stored: "12.5K assets", secured: "Forever" }
    }
  },
  {
    icon: Store,
    title: "Marketplace Integration",
    description: "Provide a platform for players to trade, sell, or showcase their NFTs with built-in marketplace functionality.",
    details: {
      long: "Our integrated marketplace allows seamless trading of your NFT rewards. Set your own prices, browse collections, and complete transactions instantly with built-in escrow protection.",
      benefits: ["Zero platform fees for listings", "Instant settlements", "Advanced filtering and search", "Secure escrow system", "Price history and analytics"],
      stats: { volume: "$2.4M", trades: "15,847", avgPrice: "$156" }
    }
  },
  {
    icon: Cpu,
    title: "Smart Contract Automation",
    description: "Automate reward issuance and NFT minting using smart contracts for transparent and efficient operations.",
    details: {
      long: "Powered by audited smart contracts on Hedera, rewards are automatically distributed based on achievements. No human intervention means faster processing and zero bias.",
      benefits: ["Fully automated distribution", "Audited contract code", "Transparent on-chain logic", "Instant execution", "Zero human error"],
      stats: { contracts: "12 Active", executed: "45K+", avgTime: "2.3s" }
    }
  },
  {
    icon: Wallet,
    title: "Wallet Connectivity",
    description: "Allow players to connect popular crypto wallets (e.g., HashPack, MetaMask) for NFT management.",
    details: {
      long: "Connect your favorite wallet with one click. We support HashPack, MetaMask, WalletConnect, and more. Your keys, your NFTs - we never hold custody of your assets.",
      benefits: ["Multi-wallet support", "One-click connection", "Non-custodial security", "Cross-chain compatibility", "Mobile wallet support"],
      stats: { wallets: "8 Supported", connected: "15,847", security: "Military Grade" }
    }
  },
  {
    icon: BarChart3,
    title: "Transparent Leaderboard",
    description: "Implement a decentralized leaderboard on Hedera to track player rankings with verifiable data.",
    details: {
      long: "Every score, every ranking is verifiable on-chain. No more questioning if leaderboards are manipulated - blockchain technology ensures complete transparency and fairness.",
      benefits: ["100% tamper-proof", "Real-time updates", "Historical data access", "Global rankings", "Verifiable achievements"],
      stats: { players: "15,847", matches: "234K+", topScore: "98,450" }
    }
  },
  {
    icon: ShieldCheck,
    title: "Security and Fairness",
    description: "Prevent cheating and fraudulent NFT minting through verifiable on-chain logic and secure protocols.",
    details: {
      long: "Multi-layered security protocols protect against cheating, bot manipulation, and fraudulent activities. All game logic is verified on-chain, making it impossible to forge achievements.",
      benefits: ["Anti-cheat detection", "Bot prevention", "Audited smart contracts", "Fraud detection AI", "Fair play guarantee"],
      stats: { cheaters: "0 Detected", security: "AAA Rated", audits: "5 Passed" }
    }
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
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="bg-gradient-card backdrop-blur-sm border-border p-6 hover:shadow-card transition-all duration-300 hover:scale-105 group cursor-pointer">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary-glow" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <Badge variant="outline" className="text-xs">Click for details →</Badge>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-gradient-card backdrop-blur-xl border-primary/30">
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-primary/20">
                        <Icon className="w-6 h-6 text-primary-glow" />
                      </div>
                      <DialogTitle className="text-2xl">{feature.title}</DialogTitle>
                    </div>
                    <DialogDescription className="text-base leading-relaxed pt-4">
                      {feature.details.long}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 pt-4">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(feature.details.stats).map(([key, value]) => (
                        <div key={key} className="bg-background/50 rounded-lg p-4 text-center border border-primary/20">
                          <div className="text-2xl font-bold text-primary-glow">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Benefits List */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-glow" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {feature.details.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary-glow mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
