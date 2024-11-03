import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Headphones, Radio } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blur animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Hero Section */}
      <section className="container pt-32 pb-16">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">AI-Powered Music Discovery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Discover Your Perfect Sound with{' '}
            <span className="text-primary relative">
              AI Magic
              <div className="absolute inset-0 bg-primary/20 blur-xl -z-10" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed">
            Let our AI understand your unique taste and mood to curate the perfect
            playlist just for you. Experience music discovery like never before.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/discover">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10" asChild>
              <Link href="/mood">Try Mood Match</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">AI Recommendations</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our AI analyzes your music taste and suggests songs you'll love,
              learning and adapting with every interaction.
            </p>
          </Card>
          <Card className="p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Headphones className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Mood-Based Playlists</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tell us your mood, and we'll create the perfect playlist to match or
              enhance it, powered by emotional intelligence AI.
            </p>
          </Card>
          <Card className="p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Radio className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Music Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dive deep into your music with AI-powered insights about tempo, key,
              mood, and more for every track.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}