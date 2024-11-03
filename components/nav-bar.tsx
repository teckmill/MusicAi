'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Music2, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function NavBar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isLoggedIn = false; // TODO: Implement actual auth state

  return (
    <nav className="fixed w-full border-b bg-background/80 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Music2 className="h-6 w-6 text-primary animate-glow" />
            <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full" />
          </div>
          <span className="text-xl font-bold">Harmonia</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button
            variant={isActive('/discover') ? 'secondary' : 'ghost'}
            asChild
            className="hover:bg-primary/10"
          >
            <Link href="/discover">Discover</Link>
          </Button>
          <Button
            variant={isActive('/playlists') ? 'secondary' : 'ghost'}
            asChild
            className="hover:bg-primary/10"
          >
            <Link href="/playlists">Playlists</Link>
          </Button>
          <Button
            variant={isActive('/mood') ? 'secondary' : 'ghost'}
            asChild
            className="hover:bg-primary/10"
          >
            <Link href="/mood">Mood</Link>
          </Button>
          <ModeToggle />
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/playlists">My Playlists</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 focus:text-red-500">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Sign in</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/auth/register">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}