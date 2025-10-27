import { Shield, Twitter, Github, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    toast({
      title: "Subscribed!",
      description: `${email} has been added to our newsletter.`,
    });
    e.currentTarget.reset();
  };
  return (
    <footer className="border-t border-border py-12 bg-card/30 backdrop-blur-sm">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary-glow" />
              <span className="text-xl font-bold">HederaPlay</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The future of gaming where achievements become permanent assets. Built on Hedera blockchain for true ownership.
            </p>
            
            {/* Newsletter Signup */}
            <div className="max-w-md">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  required
                  className="bg-background/50"
                />
                <Button type="submit" variant="default">Subscribe</Button>
              </form>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#games" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Games</a></li>
              <li><a href="#marketplace" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Marketplace</a></li>
              <li><a href="#leaderboard" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Leaderboard</a></li>
              <li><a href="#rewards" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Rewards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#docs" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">FAQ</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Support</a></li>
              <li><a href="#community" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              &copy; 2025 HederaPlay. All rights reserved. Powered by Hedera Network.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all hover:scale-110"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@hederaplay.com"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
