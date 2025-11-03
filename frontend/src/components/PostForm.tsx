import {
  Avatar,
  Button,
  FormControl,
  HStack,
  IconButton,
  Stack,
  Text,
  Textarea,
  Tooltip,
  Box,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useGetAccountQuery } from "@/apollo/graphql";

const MAX_CHARS = 280;

type Props = {
  isReply?: boolean;
};

export function PostForm({ isReply }: Props) {
  const [content, setContent] = useState("");
  const remainingChars = MAX_CHARS - content.length;
  const isOverLimit = remainingChars < 0;
  const isNearLimit = remainingChars <= 20 && remainingChars >= 0;

  const { data: accountData } = useGetAccountQuery();
  const userName = accountData?.account.name || "User";
  const userId = accountData?.account.id || "user";

  const placeholder = isReply ? "返信を投稿" : "今何してる？";

  return (
    <Stack
      borderColor="gray.200"
      borderBottomWidth="1px"
      p={4}
      bg="white"
      spacing={0}
    >
      <HStack align="flex-start" spacing={3} w="100%">
        <Avatar
          size="md"
          name={userName}
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`}
          bg="blue.500"
          color="white"
          mt={1}
        />
        <FormControl flex={1}>
          <Textarea
            name="content"
            placeholder={placeholder}
            border="none"
            variant="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fontSize="lg"
            minH="120px"
            _placeholder={{ color: "gray.400" }}
            _focus={{
              boxShadow: "none",
            }}
            resize="none"
          />
        </FormControl>
      </HStack>

      <Box pl="60px">
        <HStack justify="space-between" align="center" mt={2}>
          <HStack spacing={3} align="center" w="100%" justifyContent="flex-end">
            {content.length > 0 && (
              <HStack spacing={2} align="center">
                <Box position="relative" display="inline-flex">
                  <svg
                    width="24"
                    height="24"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke={isOverLimit ? "#ef4444" : "#e5e7eb"}
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke={
                        isOverLimit
                          ? "#ef4444"
                          : isNearLimit
                          ? "#f59e0b"
                          : "#1d9bf0"
                      }
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${
                        (content.length / MAX_CHARS) * 62.83
                      } 62.83`}
                      strokeLinecap="round"
                    />
                  </svg>
                  {isNearLimit && (
                    <Text
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      fontSize="10px"
                      fontWeight="bold"
                      color={isOverLimit ? "red.500" : "orange.500"}
                    >
                      {remainingChars}
                    </Text>
                  )}
                </Box>
                <Divider orientation="vertical" h="24px" />
              </HStack>
            )}
            <Button
              type="submit"
              colorScheme="blue"
              borderRadius="full"
              px={6}
              fontWeight="bold"
              isDisabled={content.length === 0 || isOverLimit}
              _hover={{
                transform: "translateY(-1px)",
                boxShadow: "md",
              }}
              transition="all 0.2s"
            >
              投稿
            </Button>
          </HStack>
        </HStack>
      </Box>
    </Stack>
  );
}
