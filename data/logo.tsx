import { chakra, HTMLChakraProps, Image, Flex, Text, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  const textColor = useColorModeValue('#231f20', '#fff')
  
  return (
    <chakra.div {...props}>
      <Flex align="center">
        <Image 
          src="/static/images/66dayspreplogo.png" 
          alt="66 Days Prep Logo" 
          maxHeight="32px"
        />
        <Text 
          ml={3} 
          fontSize="xl" 
          fontWeight="bold" 
          color={textColor}
        >
          66 Days Prep
        </Text>
      </Flex>
    </chakra.div>
  )
}