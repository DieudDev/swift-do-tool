import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card/30 backdrop-blur-sm">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary-glow" />
              <span className="text-xl font-bold">HederaPlay</span>
            </div>
            <p className="text-muted-foreground mb-4">
              The future of gaming where achievements become permanent assets. Built on Hedera blockchain for true ownership.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Games</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Leaderboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rewards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 HederaPlay. All rights reserved. Powered by Hedera Network.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
