import { Box, useColorModeValue } from '@chakra-ui/react'

export const PremiumBackground = ({ ...props }: any) => {
  // Alternating light-dark angled gradient (135deg diagonal)
  // Creates a striped pattern: light, dark, light, dark
  const lightModeGradient = `
    linear-gradient(
      135deg,
      #c5cad2 0%,
      #b3b9c2 8%,
      #9fa5af 16%,
      #8b919c 24%,
      #777d88 32%,
      #636970 40%,
      #525863 48%,
      #434851 56%,
      #525863 64%,
      #636970 72%,
      #777d88 80%,
      #8b919c 88%,
      #9fa5af 96%,
      #b3b9c2 100%
    )
  `

  const darkModeGradient = `
    linear-gradient(
      135deg,
      #4b5563 0%,
      #414856 8%,
      #373c49 16%,
      #2e323d 24%,
      #252932 28%,
      #1d2127 36%,
      #171a1f 44%,
      #121418 52%,
      #171a1f 60%,
      #1d2127 68%,
      #252932 76%,
      #2e323d 84%,
      #373c49 92%,
      #414856 96%,
      #4b5563 100%
    )
  `

  // Layered radial gradients for depth and dimension
  const radialOverlays = `
    radial-gradient(ellipse 120% 60% at 30% 20%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse 100% 50% at 70% 60%, rgba(0, 0, 0, 0.18) 0%, transparent 50%),
    radial-gradient(ellipse 130% 70% at 50% 90%, rgba(0, 0, 0, 0.15) 0%, transparent 60%)
  `

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-1"
      backgroundImage={useColorModeValue(lightModeGradient, darkModeGradient)}
      backgroundSize="200% 200%"
      {...props}
    >
      {/* Layered radial overlays for depth */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage={radialOverlays}
        opacity="0.7"
      />

      {/* Subtle grain texture for premium feel */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.06"
        backgroundImage="url(data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E)"
      />

      {/* Subtle vignette effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.25) 100%)"
        opacity="0.5"
      />
    </Box>
  )
}
