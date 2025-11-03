import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <HStack
      alignItems="center"
      as={Link}
      href="/"
      h={16}
      spacing={3}
      px={6}
      bg="blue.500"
      borderBottomWidth="1px"
      borderBottomColor="blue.200"
      position="sticky"
      top={0}
      zIndex={10}
      _hover={{
        bg: "blue.600",
      }}
      transition="background 0.2s"
    >
      <Icon as={MdArrowBack} boxSize={6} color="white" />
      <Text fontSize="xl" fontWeight="bold" color="white">
        {title}
      </Text>
    </HStack>
  );
}
