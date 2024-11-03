'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Clock, Music2, Plus } from 'lucide-react';

export default function PlaylistsPage() {
  const playlists = [
    {
      name: 'Chill Vibes',
      songs: 24,
      duration: '1h 42m',
      image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=800&q=80'
    },
    {
      name: 'Workout Mix',
      songs: 18,
      duration: '1h 15m',
      image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80'
    },
    {
      name: 'Focus Flow',
      songs: 32,
      duration: '2h 10m',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80'
    },
    {
      name: 'Evening Jazz',
      songs: 15,
      duration: '58m',
      image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80'
    }
  ];

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blur animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Your Playlists</h1>
              <p className="text-muted-foreground">AI-curated collections just for you</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" /> Create Playlist
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <Card 
                key={playlist.name}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <img 
                    src={playlist.image} 
                    alt={playlist.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <PlayCircle className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{playlist.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Music2 className="h-4 w-4" />
                      <span>{playlist.songs} songs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{playlist.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}