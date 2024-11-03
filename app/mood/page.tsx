'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Music, Heart, Zap, Coffee, Moon } from 'lucide-react';

export default function MoodPage() {
  const [energy, setEnergy] = useState(50);
  const [happiness, setHappiness] = useState(50);

  const moods = [
    { icon: Heart, label: 'Romantic', color: 'rose' },
    { icon: Zap, label: 'Energetic', color: 'yellow' },
    { icon: Coffee, label: 'Focus', color: 'blue' },
    { icon: Moon, label: 'Chill', color: 'purple' },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blur animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">Mood-Based Discovery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let us find the perfect music for your current mood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moods.map((mood) => (
              <Card 
                key={mood.label} 
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm cursor-pointer group"
              >
                <div className="flex items-center space-x-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <mood.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{mood.label}</h3>
                    <p className="text-muted-foreground">
                      Find music that matches your {mood.label.toLowerCase()} mood
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 space-y-8 bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Fine-tune your mood</h3>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Energy Level</label>
                    <span className="text-sm text-muted-foreground">{energy}%</span>
                  </div>
                  <Slider
                    value={[energy]}
                    onValueChange={(value) => setEnergy(value[0])}
                    max={100}
                    step={1}
                    className="py-4"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Happiness Level</label>
                    <span className="text-sm text-muted-foreground">{happiness}%</span>
                  </div>
                  <Slider
                    value={[happiness]}
                    onValueChange={(value) => setHappiness(value[0])}
                    max={100}
                    step={1}
                    className="py-4"
                  />
                </div>
              </div>
            </div>
            <Button className="w-full" size="lg">
              <Music className="mr-2 h-5 w-5" />
              Generate Playlist
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}