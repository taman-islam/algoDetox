'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { QuoteDisplay } from './components/QuoteDisplay';
import { AnimatePresence, motion } from 'framer-motion';
import { BreathingCircle } from './components/BreathingCircle';
import { PlayIcon, PauseIcon, Volume2, VolumeX } from 'lucide-react';

import { quotes, type Quote } from './Quotes';
import {
  getRandomBreathingInstruction,
  type BreathingInstruction,
} from './BreathingInstructions';

const AUDIO_PATHS = [
  '/music/somnia_1.mp3',
  '/music/somnia_10.mp3',
  '/music/somnia_2.mp3',
  '/music/somnia_3.mp3',
  '/music/somnia_7.mp3',
  '/music/somnia_8.mp3',
  '/music/somnia_9.mp3',
];

const backgroundGradients = [
  'linear-gradient(to right bottom, #d7e8ff, #b0d4ff, #86c0ff, #55abff, #0095ff)',
  'linear-gradient(to right bottom, #ffecd2, #fcb69f, #fca184, #ff8a6a, #ff7251)',
  'linear-gradient(to right bottom, #8bffd1, #6aefce, #4adfcb, #2ccec7, #00bdc2)',
  'linear-gradient(to right bottom, #f5f7fa, #e3e7ee, #cbd5e1, #b1c2d0, #99afbf)', // Soft blue-gray (calm & meditative)
  'linear-gradient(to right bottom, #ffe8e8, #ffc7c7, #ffa7a7, #ff8888, #ff6a6a)', // Warm pink-peach (gentle warmth)
  'linear-gradient(to right bottom, #d3f4ff, #b3e6ff, #8fd8ff, #69caff, #3fbaff)', // Sky blue (airy & refreshing)
  'linear-gradient(to right bottom, #f7e8ff, #eac7ff, #d9a7ff, #c888ff, #b46aff)', // Soft lavender (serene & dreamy)
  'linear-gradient(to right bottom, #fffae3, #f7ebc7, #edd9a7, #e2c888, #d7b76a)', // Golden glow (peaceful sunrise)
];

const MEDITATION_TIME = 300; // 5 minutes in seconds

export default function MeditatePage() {
  const [currentQuote, setCurrentQuote] = useState<Quote>({
    quote: '',
    source: '',
  });
  const [currentBreathingInstruction, setCurrentBreathingInstruction] =
    useState<BreathingInstruction>(getRandomBreathingInstruction());
  const [currentBackground, setCurrentBackground] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(MEDITATION_TIME);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setCurrentBackground(
      backgroundGradients[
        Math.min(
          Math.floor(Math.random() * backgroundGradients.length),
          backgroundGradients.length - 1,
        )
      ],
    );
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = new Audio(
      AUDIO_PATHS[
        Math.min(
          Math.floor(Math.random() * AUDIO_PATHS.length),
          AUDIO_PATHS.length - 1,
        )
      ],
    );
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const loadNewQuote = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      let newQuote;
      do {
        newQuote =
          quotes[
            Math.min(
              Math.floor(Math.random() * quotes.length),
              quotes.length - 1,
            )
          ];
      } while (newQuote.quote === currentQuote.quote);
      setCurrentQuote(newQuote);
      setCurrentBackground(
        backgroundGradients[
          Math.min(
            Math.floor(Math.random() * backgroundGradients.length),
            backgroundGradients.length - 1,
          )
        ],
      );
      setCurrentBreathingInstruction(getRandomBreathingInstruction());
      setTimeRemaining(MEDITATION_TIME);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentBackground}
          className='absolute inset-0'
          style={{ background: currentBackground }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.02 }}
        />
      </AnimatePresence>
      <div className='relative z-10 min-h-screen flex flex-col items-center justify-center p-4'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentQuote.quote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.02 }}
          >
            <QuoteDisplay
              quote={currentQuote.quote}
              source={currentQuote.source}
              breathingInstruction={currentBreathingInstruction}
              timeRemaining={timeRemaining}
              isPlaying={isPlaying}
              togglePlay={togglePlay}
            />
          </motion.div>
        </AnimatePresence>
        <div className='flex  items-center justify-center gap-4'>
          <Button
            onClick={loadNewQuote}
            disabled={isTransitioning}
            className='mt-8 bg-white/20 hover:bg-white/30 text-gray-800 font-semibold py-2 px-6 rounded-full transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:-translate-y-1'
          >
            New Quote
          </Button>
        </div>
        <BreathingCircle />
      </div>
    </div>
  );
}
