import {
  Users,
  Image,
  Briefcase,
  Video,
  MessageCircle,
  Play,
  Camera,
  MessageSquare,
  Cloud,
  Hash,
  LucideIcon,
} from 'lucide-react';

export type PlatformName =
  | 'Instagram'
  | 'TikTok'
  | 'Twitter (X)'
  | 'Facebook'
  | 'YouTube'
  | 'Snapchat'
  | 'LinkedIn'
  | 'Pinterest'
  | 'Reddit'
  | 'Mastodon'
  | 'Threads';

export type Website = {
  name: PlatformName;
  icon: LucideIcon;
  harmfulEffects: string[];
  safeUsage: string[];
  recommendation: string;
  badge: string;
};

const unOrderedWebsites: Website[] = [
  {
    name: 'Instagram',
    icon: Image, // Generic icon
    harmfulEffects: [
      'Unrealistic body image expectations',
      'FOMO (Fear of Missing Out)',
      'Addiction to likes and validation',
      'Reduced face-to-face interactions',
      'Increased anxiety from curated perfection',
      'Sleep disruption from late-night scrolling',
    ],
    safeUsage: [
      'Avoid Instagram altogether if possible',
      'Use only for business or creative purposes',
      'Set strict time limits (e.g., 15 minutes/day)',
      'Follow accounts that inspire or educate, not compare',
      'Turn off notifications to reduce distractions',
    ],
    recommendation:
      'We recommend avoiding Instagram due to its negative impact on mental health, self-esteem, and productivity.',
    badge: 'Avoid',
  },
  {
    name: 'TikTok',
    icon: Video, // Generic icon
    harmfulEffects: [
      'Highly addictive short-form content',
      'Potential misinformation spread',
      'Privacy concerns',
      'Impact on attention span',
      'Exposure to harmful challenges or trends',
      'Negative impact on self-esteem from viral beauty standards',
    ],
    safeUsage: [
      'Avoid TikTok altogether if possible',
      'Use only for specific, time-limited purposes (e.g., 10 minutes/day)',
      'Enable Restricted Mode to filter inappropriate content',
      'Avoid engaging with trends or challenges',
      'Turn off notifications to reduce compulsive checking',
    ],
    recommendation:
      'We advise against using TikTok due to its addictive nature, privacy risks, and negative effects on attention span and self-esteem.',
    badge: 'Avoid',
  },
  {
    name: 'Twitter (X)',
    icon: MessageCircle, // Generic icon
    harmfulEffects: [
      'Information overload',
      'Echo chamber effect',
      'Cyberbullying and harassment',
      'Addiction to real-time updates',
      'Increased stress from heated debates',
      'Exposure to toxic or polarizing content',
    ],
    safeUsage: [
      'Avoid Twitter (X) altogether if possible',
      'Use only for professional or news updates',
      'Curate your feed to follow only trusted sources',
      'Set time limits (e.g., 20 minutes/day)',
      'Avoid engaging in arguments or debates',
    ],
    recommendation:
      'We recommend avoiding Twitter (X) due to its impact on focus, mental well-being, and exposure to toxic content.',
    badge: 'Avoid',
  },
  {
    name: 'Facebook',
    icon: Users, // Generic icon
    harmfulEffects: [
      'Time consumption',
      'Privacy concerns',
      'Comparison and self-esteem issues',
      'Spread of misinformation',
      'Increased anxiety from social comparison',
      'Exposure to polarizing or divisive content',
    ],
    safeUsage: [
      'Avoid Facebook altogether if possible',
      'Use only for specific tasks like event planning or group communication',
      'Set strict time limits (e.g., 10 minutes/day)',
      'Turn off notifications to reduce distractions',
      'Be cautious with privacy settings and data sharing',
    ],
    recommendation:
      'We advise against using Facebook due to its potential for addiction, privacy concerns, and negative impact on mental health.',
    badge: 'Avoid',
  },
  {
    name: 'YouTube',
    icon: Play, // Generic icon
    harmfulEffects: [
      'Procrastination and time wastage',
      'Addiction to content consumption',
      'Exposure to inappropriate content',
      'Comparison with content creators',
      'Sleep disruption from binge-watching',
      'Distraction from work or studies',
    ],
    safeUsage: [
      'Use a feed blocker to avoid recommended videos',
      'Create a watchlist for educational content',
      'Set strict time limits (e.g., 30 minutes/day)',
      'Avoid autoplay and endless scrolling',
      'Use only for pre-planned, specific purposes',
    ],
    recommendation:
      'Use YouTube strictly for educational content with a feed blocker installed. Plan your viewing in advance and avoid autoplay.',
    badge: 'Use with caution',
  },
  {
    name: 'Snapchat',
    icon: Camera, // Generic icon
    harmfulEffects: [
      'Encourages constant connectivity',
      'Privacy risks with location sharing',
      'Superficial interactions',
      'FOMO and social anxiety',
      'Pressure to maintain Snapstreaks',
      'Exposure to inappropriate or ephemeral content',
    ],
    safeUsage: [
      'Limit usage to close friends',
      'Use Ghost Mode for privacy',
      'Avoid obsessing over Snapstreaks',
      'Set specific times for checking and responding',
      'Turn off notifications to reduce compulsive checking',
    ],
    recommendation:
      'Use Snapchat cautiously. Limit usage, be mindful of what you share, and prioritize real-world interactions.',
    badge: 'Use with caution',
  },
  {
    name: 'LinkedIn',
    icon: Briefcase, // Generic icon
    harmfulEffects: [
      'Professional comparison and imposter syndrome',
      'Overemphasis on personal branding',
      'Time sink with minimal returns',
      'Privacy concerns with professional data',
      'Pressure to constantly network or update profiles',
      'Burnout from overemphasis on professional achievements',
    ],
    safeUsage: [
      'Use a feed blocker to remove the news feed',
      'Set specific goals for each session (e.g., job search)',
      'Focus on direct communication and networking',
      'Limit usage to 2-3 times per week',
      'Avoid comparing yourself to others’ profiles',
    ],
    recommendation:
      'Use LinkedIn with a feed blocker and focus on professional communication, avoiding unnecessary browsing or comparison.',
    badge: 'Use with caution',
  },
  {
    name: 'Pinterest',
    icon: Image, // Generic icon
    harmfulEffects: [
      'Unrealistic lifestyle and creativity expectations',
      'Time consumption without productivity',
      'Comparison and feelings of inadequacy',
      'Encouragement of consumerism',
      'Increased anxiety from unattainable goals',
      'Distraction from real-life priorities',
    ],
    safeUsage: [
      'Use for specific project inspiration',
      'Set strict time limits for browsing (e.g., 15 minutes/day)',
      'Create achievable and realistic boards',
      'Focus on action rather than just pinning',
      'Turn off notifications to reduce distractions',
    ],
    recommendation:
      'Avoid Pinterest due to unrealistic expectations and time consumption. If necessary, limit usage to project research.',
    badge: 'Avoid',
  },
  {
    name: 'Reddit',
    icon: MessageSquare, // Generic icon
    harmfulEffects: [
      'Time waste and procrastination',
      'Exposure to negative communities',
      'Echo chamber effect',
      'Addiction to karma and validation',
      'Increased stress from heated arguments',
      'Exposure to toxic or polarizing content',
    ],
    safeUsage: [
      'Curate your subreddit subscriptions carefully',
      'Set time limits for browsing (e.g., 20 minutes/day)',
      'Avoid engaging in heated arguments',
      'Focus on positive, educational communities',
      'Turn off notifications to reduce compulsive checking',
    ],
    recommendation:
      'Use Reddit with caution. Curate your subscriptions, set time limits, and prioritize educational or positive content.',
    badge: 'Use with caution',
  },
  {
    name: 'Mastodon',
    icon: Cloud, // Generic icon
    harmfulEffects: [
      'Information overload',
      'Learning curve of decentralized structure',
      'Limited user base for interaction',
      'Potential for echo chambers',
      'Exposure to unmoderated or harmful content',
      'Difficulty in finding relevant communities',
    ],
    safeUsage: [
      'Choose instances based on your interests',
      'Set time limits for usage (e.g., 20 minutes/day)',
      'Engage in meaningful discussions',
      'Be mindful of content sharing across instances',
      'Avoid overcommitting to multiple communities',
    ],
    recommendation:
      'Use Mastodon with caution. It offers decentralization but still carries risks of information overload and echo chambers.',
    badge: 'Use with caution',
  },
  {
    name: 'Threads',
    icon: Hash, // Generic icon
    harmfulEffects: [
      'Addiction to short-form content',
      'Encourages constant checking for updates',
      'May harm attention span',
      'Risk of impulsive posting',
      'Exposure to toxic or polarizing content',
      'Increased stress from real-time updates',
    ],
    safeUsage: [
      'Avoid Threads altogether if possible',
      'Use only for specific, time-limited purposes (e.g., 10 minutes/day)',
      'Turn off notifications to reduce compulsive checking',
      'Avoid engaging with controversial topics',
      'Set a timer to limit usage',
    ],
    recommendation:
      'We advise against using Threads due to its addictive design, negative impact on productivity, and exposure to toxic content.',
    badge: 'Avoid',
  },
];

export const websites = unOrderedWebsites.sort((a, b) =>
  a.name.localeCompare(b.name),
);
