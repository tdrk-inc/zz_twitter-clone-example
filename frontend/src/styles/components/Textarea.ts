import {
  TextareaProps,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/react";

const content = defineStyle<TextareaProps>({
  resize: "none",
  overflowY: "auto",
  rounded: "md",
  p: 2,
  fontSize: "lg",
  _focus: {
    boxShadow: "none",
    outline: "none",
  },
  _placeholder: {
    color: "gray.400",
  },
});

export const Textarea = defineStyleConfig({
  variants: {
    content,
  },
});
