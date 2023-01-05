import { Text, VStack } from "@chakra-ui/react";
import { Folder } from "tabler-icons-react";

interface Props {
  children: string;
  imageHeight?: number | string;
}

export function RecordsNotFound (props: Props) {
  const { children, imageHeight = 40 } = props;

  return (
    <VStack justify="center" align="center" py={8} spacing={2}>
      <Folder size={imageHeight} />
      <Text fontSize="sm" fontWeight="light">
        {children}
      </Text>
    </VStack>
  )
}