import Header from "@/components/Header";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <h1 className="text-xl font-bold">
        <TextHoverEffect
      text="Your Fitness, Your Journey"
      duration={0.5}/>
      </h1>
    </div>
    
  );
}
