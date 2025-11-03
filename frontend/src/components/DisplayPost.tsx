import { DisplayPostFragment } from "@/apollo/graphql";
import {
  Avatar,
  chakra,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineEdit } from "react-icons/md";
import { UpdatePostModal } from "./UpdatePostModal";
import { useContext } from "react";
import { AccountContext } from "@/providers/AccountProvider";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import { RemovePostAlert } from "./RemovePostAlert";

type Props = {
  post: DisplayPostFragment;
};

export function DisplayPost({ post }: Props) {
  const context = useContext(AccountContext);

  const {
    isOpen: isUpdateModalOpen,
    onOpen: onUpdateModalOpen,
    onClose: onUpdateModalClose,
  } = useDisclosure();
  const {
    isOpen: isRemoveAlertOpen,
    onOpen: onRemoveAlertOpen,
    onClose: onRemoveAlertClose,
  } = useDisclosure();

  return (
    <Stack borderBottomWidth="1px" borderBottomColor="glay" pt={4}>
      <HStack
        as={Link}
        href={`/post/${post.id}`}
        px={4}
        align="start"
        spacing={3}
      >
        <Avatar
          name={post.account.name}
          size="sm"
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.account.id}`}
          bg="blue.500"
          color="white"
        />
        <Stack flex={1} spacing={2}>
          <HStack>
            <Text color="blackAlpha.700" fontWeight="semibold">
              {post.account.name}
            </Text>
            <Text color="blackAlpha.700" fontSize="small">
              @{post.account.id}
            </Text>
          </HStack>
          <Text whiteSpace="pre-wrap">{post.content}</Text>
        </Stack>
      </HStack>
      <HStack justifyContent="end" spacing={5} px={6} mb={4}>
        <chakra.button
          color={
            post.account.id === context.accountId ? "black" : "blackAlpha.400"
          }
          onClick={onUpdateModalOpen}
          disabled={post.account.id !== context.accountId}
        >
          <Icon as={MdOutlineEdit} boxSize={5} />
        </chakra.button>
        <UpdatePostModal
          post={post}
          isOpen={isUpdateModalOpen}
          onClose={onUpdateModalClose}
        />
        <chakra.button
          color={
            post.account.id === context.accountId
              ? "red"
              : "rgba(255, 0, 0, 0.4)"
          }
          onClick={onRemoveAlertOpen}
          disabled={post.account.id !== context.accountId}
        >
          <Icon as={FiTrash} boxSize={5} />
        </chakra.button>
        <RemovePostAlert
          id={post.id}
          isOpen={isRemoveAlertOpen}
          onClose={onRemoveAlertClose}
        />
      </HStack>
    </Stack>
  );
}
