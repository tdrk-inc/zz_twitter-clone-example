import {
  GetPostsDocument,
  useCreatePostMutation,
  useGetPostsQuery,
} from "@/apollo/graphql";
import { DisplayPost } from "@/components/DisplayPost";
import { PostForm } from "@/components/PostForm";
import {
  Button,
  chakra,
  HStack,
  Icon,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { RiTwitterXFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

export default function Home() {
  const toast = useToast();
  const router = useRouter();
  const [formKey, setFormKey] = useState(0);

  const { data } = useGetPostsQuery();

  const [post] = useCreatePostMutation({
    onCompleted: () => {
      toast({
        title: "投稿しました",
        status: "success",
        duration: 2000,
      });
      setFormKey((prev) => prev + 1);
    },
    onError: () => {
      toast({
        title: "投稿に失敗しました",
        status: "error",
        duration: 2000,
      });
    },
    refetchQueries: [GetPostsDocument],
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post({
      variables: {
        input: {
          content: e.currentTarget.content.value,
        },
      },
    });
  };

  const handleLogout = () => {
    destroyCookie(null, "token", { path: "/" });
    router.push("/auth/signin");
  };

  return (
    <Stack alignItems="center" h="100vh" bg="gray.50">
      <Stack
        w="100%"
        maxW="750px"
        h="100%"
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
        spacing={0}
        bg="white"
      >
        <HStack
          h={16}
          px={6}
          borderBottomWidth="1px"
          borderBottomColor="blue.200"
          bg="blue.500"
          position="sticky"
          top={0}
          zIndex={10}
          justifyContent="space-between"
        >
          <HStack spacing={2}>
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Mutter
            </Text>
          </HStack>
          <Button
            leftIcon={<MdLogout />}
            size="sm"
            colorScheme="whiteAlpha"
            variant="solid"
            onClick={handleLogout}
            borderRadius={10}
            _hover={{
              bg: "whiteAlpha.300",
            }}
          >
            ログアウト
          </Button>
        </HStack>
        <chakra.form onSubmit={onSubmit}>
          <PostForm key={formKey} />
        </chakra.form>
        {data?.posts.map((post) => (
          <DisplayPost post={post} key={post.id} />
        ))}
      </Stack>
    </Stack>
  );
}
