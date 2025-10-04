import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing',
  description:
    'Simple, Open Pricing',
  plans: [
    {
      id: 'free',
      title: '7-Day Trial',
      description: 'Try full features for free',
      price: 'Free',
      features: [
        {
          title: 'Explore all drills, tools, and the AI coach with no limits',
        },
        {
          title: 'No ads, no hidden fees',
        },
        {
          title: 'Cancel anytime before the trial ends',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
    {
      id: 'monthly',
      title: 'Monthly',
      description: 'Popular',
      price: '$15.99 / month',
      isRecommended: true,
      features: [
        {
          title: 'AI-powered coach for personalized feedback',
        },
        {
          title: 'Unlimited daily drills in math, cases, and Excel',
        },
        {
          title: '66-day streak tracker and heatmap',
        },
        {
          title: 'AI resume checker and quick practice mode',
        },
        {
          title: 'Pomodoro timer and screen blocker',
        },
        {
          title: 'Complete Excel shortcut and formula guide',
        },
        {
          title: 'Full resource hub for consulting and banking prep',
        },
        null,
        {
          title: 'Ideal for short-term prep before interviews or assessments',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
    {
      id: 'yearly',
      title: 'Yearly',
      description: 'Best Value',
      price: '$49.99 / year',
      features: [
        {
          title: 'AI-powered coach for personalized feedback',
        },
        {
          title: 'Unlimited daily drills in math, cases, and Excel',
        },
        {
          title: '66-day streak tracker and heatmap',
        },
        {
          title: 'AI resume checker and quick practice mode',
        },
        {
          title: 'Pomodoro timer and screen blocker',
        },
        {
          title: 'Complete Excel shortcut and formula guide',
        },
        {
          title: 'Full resource hub for consulting and banking prep',
        },
        null,
        {
          title: 'Perfect for long-term prep, habit tracking, and consistent progress',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
  ],
}
