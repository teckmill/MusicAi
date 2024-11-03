'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Music2, ArrowRight } from 'lucide-react';

export default function DiscoverPage() {
  const [genres] = useState([
    { name: 'Electronic', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80' },
    { name: 'Hip Hop', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80' },
    { name: 'Rock', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80' },
    { name: 'Jazz', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80' },
  ]);

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blur animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Sparkles className="h-6 w-6" />
              <span className="text-lg font-medium">Discover New Music</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight">Explore Your Next Favorite Song</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let our AI guide you through a personalized journey of musical discovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {genres.map((genre) => (
              <Card 
                key={genre.name}
                className="group relative overflow-hidden h-64 hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${genre.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <h3 className="text-3xl font-bold text-white">{genre.name}</h3>
                  <Button 
                    variant="secondary"
                    className="self-start opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Explore {genre.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Music2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Daily Mix</h3>
                  <p className="text-muted-foreground">Fresh recommendations based on your taste</p>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Listen Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}