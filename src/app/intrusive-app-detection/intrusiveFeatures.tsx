import {
  Infinity,
  Trophy,
  Bell,
  Clock,
  ThumbsUp,
  Zap,
  Eye,
  DollarSign,
  Lock,
  Heart,
  TrendingUp,
} from 'lucide-react';

interface IntrusiveFeature {
  name: string;
  icon: React.ElementType;
  description: string;
  examples: string[];
  impacts: string[];
}

export const intrusiveFeatures: IntrusiveFeature[] = [
  {
    name: 'Infinite Scroll',
    icon: Infinity,
    description:
      'Infinite scroll removes natural stopping points, trapping users in continuous app usage without addressing specific user needs. It exploits psychological tendencies to keep users engaged indefinitely.',
    examples: [
      'Social media feeds (e.g., Instagram, TikTok)',
      'News aggregators (e.g., Flipboard)',
      'Content discovery platforms (e.g., Pinterest)',
    ],
    impacts: [
      'Chronic procrastination',
      'Reduced productivity',
      'Heightened stress from information overload',
      'Difficulty maintaining focus on real-world tasks',
    ],
  },
  {
    name: 'Gamification',
    icon: Trophy,
    description:
      'Gamification leverages game-like elements to artificially boost engagement, often intruding on users’ focus and daily routines by creating addictive feedback loops.',
    examples: [
      'Streaks (e.g., Snapchat, Duolingo)',
      'Points systems (e.g., fitness apps)',
      'Badges and achievements (e.g., LinkedIn)',
      'Leaderboards (e.g., gaming apps)',
    ],
    impacts: [
      'Obsessive behavior to maintain streaks',
      'Increased anxiety over losing progress',
      'Reduced enjoyment of activities due to external rewards',
    ],
  },
  {
    name: 'Push Notifications',
    icon: Bell,
    description:
      'Excessive or manipulative push notifications disrupt focus and create a false sense of urgency or FOMO (Fear of Missing Out), often leading to compulsive app checking.',
    examples: [
      "'Your friend just posted after a while'",
      'Flash sale alerts (e.g., e-commerce apps)',
      'Daily reminders (e.g., fitness or productivity apps)',
      "'You’re missing out on trending posts!'",
    ],
    impacts: [
      'Chronic interruptions leading to fragmented attention',
      'Heightened anxiety from constant alerts',
      'Difficulty maintaining work-life balance',
    ],
  },
  {
    name: 'Time-sensitive Features',
    icon: Clock,
    description:
      'Features that impose artificial time pressure or expiration manipulate users into checking apps frequently and making rushed decisions, often exploiting FOMO.',
    examples: [
      'Stories that disappear after 24 hours (e.g., Instagram, Snapchat)',
      'Limited-time offers (e.g., e-commerce apps)',
      'Countdown timers for actions (e.g., booking apps)',
      'Flash deals (e.g., Amazon, Groupon)',
    ],
    impacts: [
      'Heightened chronic stress from fear of missing out',
      'Impulsive decision-making leading to buyer’s remorse',
      'Disrupted daily routines due to constant app checking',
    ],
  },
  {
    name: 'Social Validation Mechanics',
    icon: ThumbsUp,
    description:
      'Features that tie self-worth to external validation (likes, comments, followers) foster unhealthy attachment and obsessive checking behaviors, often leading to social comparison.',
    examples: [
      'Like counts (e.g., Instagram, Facebook)',
      'Follower/following numbers (e.g., Twitter, TikTok)',
      'Comment sections (e.g., YouTube)',
      'Reactions and shares (e.g., Facebook)',
    ],
    impacts: [
      'Lowered self-esteem from constant comparison',
      'Increased anxiety over social approval',
      'A distorted sense of self-worth tied to online metrics',
    ],
  },
  {
    name: 'Autoplay',
    icon: Zap,
    description:
      'Autoplay features, particularly for videos, encourage mindless consumption and make it difficult for users to disengage, often leading to unintended extended usage.',
    examples: [
      'Video autoplay (e.g., YouTube, Netflix)',
      'Auto-advancing stories or posts (e.g., Instagram, TikTok)',
      'Continuous podcast playback (e.g., Spotify)',
    ],
    impacts: [
      'Loss of time for meaningful activities',
      'Disrupted sleep patterns from late-night bingeing',
      'Reduced ability to focus on offline responsibilities',
    ],
  },
  {
    name: 'Dark Patterns',
    icon: Eye,
    description:
      'Dark patterns are deceptive UI designs that manipulate users into actions they didn’t intend, often making it difficult to opt-out or unsubscribe.',
    examples: [
      'Hidden unsubscribe buttons (e.g., email services)',
      'Confusing toggle switches (e.g., privacy settings)',
      'Guilt-inducing language for opting out (e.g., “Are you sure you want to leave?”)',
      'Forced continuity (e.g., auto-renewing subscriptions)',
    ],
    impacts: [
      'Frustration and mistrust toward digital services',
      'Unintended financial losses from hidden charges',
      'Feelings of helplessness when trying to regain control',
    ],
  },
  {
    name: 'Microtransactions',
    icon: DollarSign,
    description:
      'Small, frequent in-app purchases exploit impulsive behavior or FOMO, often blurring the lines between spending and gameplay or app usage.',
    examples: [
      'In-game currencies (e.g., Fortnite, Roblox)',
      'Boosters or power-ups (e.g., mobile games)',
      'Exclusive digital items (e.g., skins, emotes)',
      'Pay-to-skip mechanics (e.g., waiting timers)',
    ],
    impacts: [
      'Financial strain from accumulating small purchases',
      'Regret over impulsive spending',
      'Strained relationships due to overspending on virtual items',
    ],
  },
  {
    name: 'Data Collection',
    icon: Lock,
    description:
      'Excessive or unclear data collection practices infringe on user privacy and enable manipulative targeting, often without explicit user consent.',
    examples: [
      'Location tracking (e.g., maps, social media)',
      'Contact list access (e.g., messaging apps)',
      'Browsing history collection (e.g., ad networks)',
      'Behavioral tracking (e.g., personalized ads)',
    ],
    impacts: [
      'Loss of privacy and autonomy',
      'Increased vulnerability to targeted scams',
      'Anxiety over potential data breaches or misuse of personal information',
    ],
  },
  {
    name: 'Emotional Manipulation',
    icon: Heart,
    description:
      'Apps that use emotionally charged language or imagery to influence user behavior, often exploiting vulnerabilities or insecurities.',
    examples: [
      'Guilt-tripping messages (e.g., “Your friends are waiting for you!”)',
      'Fear-based prompts (e.g., “Don’t miss out on this limited offer!”)',
      'Overly positive reinforcement (e.g., “You’re doing great, keep going!”)',
    ],
    impacts: [
      'Emotional exhaustion from constant pressure',
      'Increased susceptibility to manipulation',
      'Strained relationships due to app-induced guilt or anxiety',
    ],
  },
  {
    name: 'Algorithmic Manipulation',
    icon: TrendingUp,
    description:
      'Algorithms designed to prioritize addictive or polarizing content, often at the expense of user well-being or balanced information consumption.',
    examples: [
      'Echo chambers (e.g., social media feeds)',
      'Content amplification (e.g., viral trends)',
      'Personalized recommendations (e.g., YouTube, Netflix)',
    ],
    impacts: [
      'Reinforcement of harmful biases',
      'Increased polarization in personal beliefs',
      'Addiction to sensational content leading to reduced critical thinking',
    ],
  },
];
