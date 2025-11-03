import {
  GetPostDocument,
  useCreatePostMutation,
  useGetPostQuery,
} from "@/apollo/graphql";
import { DisplayPost } from "@/components/DisplayPost";
import { Header } from "@/components/Header";
import { PostForm } from "@/components/PostForm";
import {
  Avatar,
  chakra,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Post() {
  const router = useRouter();
  const toast = useToast();
  const [formKey, setFormKey] = useState(0);

  const { data } = useGetPostQuery({
    variables: {
      id: Number(router.query.id),
    },
  });

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
    refetchQueries: [GetPostDocument],
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post({
      variables: {
        input: {
          content: e.currentTarget.content.value,
          basePostId: Number(router.query.id),
        },
      },
    });
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
        <Header title="投稿" />
        <HStack
          p={4}
          borderBottomWidth="1px"
          borderColor="gray.200"
          align="start"
          spacing={3}
        >
          <Avatar
            name={data?.post.account.name}
            size="md"
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data?.post.account.id}`}
            bg="blue.500"
            color="white"
          />
          <Stack flex={1} spacing={2}>
            <HStack>
              <Text color="blackAlpha.700" fontWeight="semibold">
                {data?.post.account.name}
              </Text>
              <Text color="blackAlpha.700" fontSize="small">
                @{data?.post.account.id}
              </Text>
            </HStack>
            <Text whiteSpace="pre-wrap">{data?.post.content}</Text>
            <Text color="blackAlpha.700" fontSize="small">
              更新日時: {new Date(data?.post.updatedAt).toLocaleString()}
            </Text>
          </Stack>
        </HStack>
        {data?.post.relatedPosts?.map((post) => (
          <DisplayPost post={post} key={post.id} />
        ))}
        <chakra.form onSubmit={onSubmit}>
          <PostForm key={formKey} isReply={true} />
        </chakra.form>
      </Stack>
    </Stack>
  );
}
