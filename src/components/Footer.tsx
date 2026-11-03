import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => <footer className="border-t bg-background/50 font-source">
  <section aria-labelledby="discuss-role" className="bg-primary text-primary-foreground">
    <div className="container py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="max-w-2xl"><h2 id="discuss-role" className="font-inter text-2xl font-semibold">Discuss a role</h2><p className="mt-2 text-base text-primary-foreground/85">I'm interested in operations, partnerships and commercial analyst roles where I can improve processes and support business decisions.</p></div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" className="min-h-11 bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-semibold"><a href="mailto:mucundh.ramesh@edu.escp.eu"><Mail />Email Mucundh</a></Button>
        <Button asChild size="lg" variant="outline" className="min-h-11 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="https://www.linkedin.com/in/mucundh-ramesh/" target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn</a></Button>
      </div>
    </div>
  </section>
  <div className="container py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4"><h3 className="text-lg font-semibold font-playfair">Mucundh Ramesh</h3><p className="text-muted-foreground max-w-md text-base">Connecting technology, data, and people.</p></div>
      <div><h4 className="text-base font-medium font-inter mb-3">Quick Links</h4><div className="flex flex-col items-start">
        {[["Home", "/"], ["Skills", "/#skills"], ["Case Studies", "/#case-studies"], ["Projects", "/#projects"], ["Experience", "/#journey"]].map(([label,to]) => <Button key={to} asChild variant="link" className="text-base min-h-11 px-0 text-muted-foreground"><Link to={to}>{label}</Link></Button>)}
        <Button asChild variant="link" className="text-base min-h-11 px-0 text-muted-foreground"><a href="https://www.linkedin.com/in/mucundh-ramesh/" target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn</a></Button>
      </div></div>
    </div>
    <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-base text-muted-foreground"><p>© {new Date().getFullYear()} Mucundh Ramesh. All rights reserved.</p><p>Made with ♥ in London, United Kingdom</p></div>
  </div>
</footer>;
