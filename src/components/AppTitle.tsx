import { Heading } from "@chakra-ui/react";

interface Props {
  title: string;
}

export function AppTitle ({ title }: Props) {
  return (
    <Heading size="md">
      {title}
    </Heading>
  )
}