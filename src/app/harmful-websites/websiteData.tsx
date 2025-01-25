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

export type Website = {
  name: string;
  icon: LucideIcon;
  harmfulEffects: string[];
  safeUsage: string[];
  recommendation: string;
  badge: string;
};

export const websites: Website[] = [
  {
    name: 'Instagram',
    icon: Image,
    harmfulEffects: [
      'Unrealistic body image expectations',
      'FOMO (Fear of Missing Out)',
      'Addiction to likes and validation',
      'Reduced face-to-face interactions',
    ],
    safeUsage: [
      'Consider avoiding Instagram altogether',
      'If needed, use it strictly for business purposes',
      'Set strict time limits for usage',
      'Be selective about who you follow',
    ],
    recommendation:
      'We recommend avoiding Instagram due to its negative impact on mental health and productivity.',
    badge: 'Avoid',
  },
  {
    name: 'TikTok',
    icon: Video,
    harmfulEffects: [
      'Highly addictive short-form content',
      'Potential misinformation spread',
      'Privacy concerns',
      'Impact on attention span',
    ],
    safeUsage: [
      'Consider avoiding TikTok altogether',
      'Use only for specific, time-limited purposes',
      'Be cautious with privacy settings',
    ],
    recommendation:
      'We advise against using TikTok due to its addictive nature and negative effects on attention span.',
    badge: 'Avoid',
  },
  {
    name: 'Twitter (X)',
    icon: MessageCircle,
    harmfulEffects: [
      'Information overload',
      'Echo chamber effect',
      'Cyberbullying and harassment',
      'Addiction to real-time updates',
    ],
    safeUsage: [
      'Consider avoiding Twitter (X) altogether',
      'If necessary, use only for professional purposes',
      'Limit usage time and follow selective accounts',
    ],
    recommendation:
      'We recommend avoiding Twitter (X) due to its impact on focus and mental well-being.',
    badge: 'Avoid',
  },
  {
    name: 'Facebook',
    icon: Users,
    harmfulEffects: [
      'Time consumption',
      'Privacy concerns',
      'Comparison and self-esteem issues',
      'Spread of misinformation',
    ],
    safeUsage: [
      'Consider avoiding Facebook altogether',
      'Use only for specific tasks like event planning',
      'Be cautious with privacy settings',
    ],
    recommendation:
      'We advise against using Facebook due to its potential for addiction, privacy concerns, and mental health impact.',
    badge: 'Avoid',
  },
  {
    name: 'YouTube',
    icon: Play,
    harmfulEffects: [
      'Procrastination and time wastage',
      'Addiction to content consumption',
      'Exposure to inappropriate content',
      'Comparison with content creators',
    ],
    safeUsage: [
      'Use a feed blocker to avoid recommended videos',
      'Create a watchlist for educational content',
      'Set strict time limits for viewing',
      'Use only for pre-planned, specific purposes',
    ],
    recommendation:
      'Use YouTube strictly for educational content with a feed blocker installed. Plan your viewing in advance.',
    badge: 'Use with caution',
  },
  {
    name: 'Snapchat',
    icon: Camera,
    harmfulEffects: [
      'Encourages constant connectivity',
      'Privacy risks with location sharing',
      'Superficial interactions',
      'FOMO and social anxiety',
    ],
    safeUsage: [
      'Limit usage to close friends',
      'Use Ghost Mode for privacy',
      'Avoid obsessing over Snapstreaks',
      'Set specific times for checking and responding',
    ],
    recommendation:
      'Use Snapchat cautiously. Limit usage, be mindful of what you share, and prioritize real-world interactions.',
    badge: 'Use with caution',
  },
  {
    name: 'LinkedIn',
    icon: Briefcase,
    harmfulEffects: [
      'Professional comparison and imposter syndrome',
      'Overemphasis on personal branding',
      'Time sink with minimal returns',
      'Privacy concerns with professional data',
    ],
    safeUsage: [
      'Use a feed blocker to remove news feed',
      'Set specific goals for each session',
      'Focus on direct communication and networking',
      'Limit usage to job search or recruiting',
    ],
    recommendation:
      'Use LinkedIn with a feed blocker and focus on professional communication, avoiding unnecessary browsing.',
    badge: 'Use with caution',
  },
  {
    name: 'Pinterest',
    icon: Image,
    harmfulEffects: [
      'Unrealistic lifestyle and creativity expectations',
      'Time consumption without productivity',
      'Comparison and feelings of inadequacy',
      'Encouragement of consumerism',
    ],
    safeUsage: [
      'Use for specific project inspiration',
      'Set strict time limits for browsing',
      'Create achievable and realistic boards',
      'Focus on action rather than just pinning',
    ],
    recommendation:
      'Avoid Pinterest due to unrealistic expectations and time consumption. If necessary, limit usage to project research.',
    badge: 'Avoid',
  },
  {
    name: 'Reddit',
    icon: MessageSquare,
    harmfulEffects: [
      'Time waste and procrastination',
      'Exposure to negative communities',
      'Echo chamber effect',
      'Addiction to karma and validation',
    ],
    safeUsage: [
      'Curate your subreddit subscriptions carefully',
      'Set time limits for browsing',
      'Avoid heated arguments',
      'Focus on positive, educational communities',
    ],
    recommendation:
      'Use Reddit with caution. Curate your subscriptions, set time limits, and prioritize educational or positive content.',
    badge: 'Use with caution',
  },
  {
    name: 'Mastodon',
    icon: Cloud,
    harmfulEffects: [
      'Information overload',
      'Learning curve of decentralized structure',
      'Limited user base for interaction',
      'Potential for echo chambers',
    ],
    safeUsage: [
      'Choose instances based on your interests',
      'Set time limits for usage',
      'Engage in meaningful discussions',
      'Be mindful of content sharing across instances',
    ],
    recommendation:
      'Use Mastodon with caution. It offers decentralization but still carries risks of information overload and echo chambers.',
    badge: 'Use with caution',
  },
  {
    name: 'Threads',
    icon: Hash,
    harmfulEffects: [
      'Addiction to short-form content',
      'Encourages constant checking for updates',
      'May harm attention span',
      'Risk of impulsive posting',
    ],
    safeUsage: [
      'Consider avoiding Threads altogether',
      'Use only for specific, time-limited purposes',
      'Be cautious with privacy settings',
    ],
    recommendation:
      'We advise against using Threads due to its addictive design and negative impact on productivity.',
    badge: 'Avoid',
  },
];
