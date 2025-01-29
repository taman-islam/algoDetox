const breathingInstructions = [
  'Close your eyes. Let this quote settle into your breath and mind.',
  'Pause. Inhale deeply. Let these words guide your next few moments.',
  'Take a deep breath. Let stillness unfold as you reflect on these words.',
  'Breathe with intention. Let this quote whisper its meaning to you.',
  'Exhale distractions. Inhale presence. Let these words be your focus.',
  'Let your breath and this quote flow together in quiet reflection.',
  'With each inhale, welcome clarity. With each exhale, release the noise.',
  'Find a moment of peace. Let this quote be your guide within it.',
  'Be still. Breathe. Allow these words to sink into your awareness.',
  'Rest in this moment. Let these words unfold their meaning within you.',
] as const;

export type BreathingInstruction = (typeof breathingInstructions)[number];

export const getRandomBreathingInstruction = (): BreathingInstruction => {
  return breathingInstructions[
    Math.min(
      Math.floor(Math.random() * breathingInstructions.length),
      breathingInstructions.length - 1,
    )
  ];
};
