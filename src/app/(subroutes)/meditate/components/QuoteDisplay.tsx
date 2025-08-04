import { PlayIcon, PauseIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BreathingInstruction } from '../BreathingInstructions';

interface QuoteDisplayProps {
  quote: string;
  source: string;
  breathingInstruction: BreathingInstruction;
  timeRemaining: number;
  isPlaying: boolean;
  togglePlay: () => void;
}

export function QuoteDisplay({
  quote,
  source,
  breathingInstruction,
  timeRemaining,
  isPlaying,
  togglePlay,
}: QuoteDisplayProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setProgress((timeRemaining / 300) * 100);
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <Card className="max-w-2xl w-full bg-white/10 backdrop-blur-md shadow-lg rounded-lg overflow-hidden border-0">
      <CardContent className="p-8">
        <div className="text-center">
          <motion.p
            className="text-sm text-gray-600 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.02 }}
          >
            {breathingInstruction}
          </motion.p>
          <motion.p
            className="text-3xl font-light text-gray-800 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.02 }}
          >
            {quote}
          </motion.p>

          {/* Play Button Centered */}
          <div className="flex justify-center mb-6">
            <Button
              onClick={togglePlay}
              className="bg-white/20 hover:bg-white/30 text-gray-800 font-semibold 
                         w-16 h-16 rounded-full flex items-center justify-center 
                         transition-all duration-300 backdrop-blur-sm shadow-md 
                         hover:shadow-lg transform hover:-translate-y-1"
            >
              {isPlaying ? <PauseIcon size={32} /> : <PlayIcon size={32} />}
            </Button>
          </div>

          <motion.div
            className="text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.02 }}
          >
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </motion.div>

          <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4 overflow-hidden">
            <motion.div
              className="bg-gray-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
              initial={{ width: '100%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-center">
        <p className="text-sm text-gray-600">{source}</p>
      </CardFooter>
    </Card>
  );
}
