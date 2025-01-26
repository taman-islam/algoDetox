import { IntrusiveAppDetectionComponent } from './IntrusiveAppDetectionComponent';

export const metadata = {
  title: 'Detecting Intrusive Apps | AlgoDetox',
  description:
    'Learn how to identify apps that may be intruding on your digital well-being and focus.',
  openGraph: {
    title: 'Detecting Intrusive Apps | AlgoDetox',
    description:
      'Learn how to identify apps that may be intruding on your digital well-being and focus.',
    type: 'website',
    url: 'https://AlgoDetox.com/intrusive-app-detection',
    image: '/og-image.png', // Make sure to add an appropriate Open Graph image
  },
};

export default function IntrusiveAppDetection() {
  return <IntrusiveAppDetectionComponent />;
}
