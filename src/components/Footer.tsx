import { Link as ChakraLink, Spacer, Stack, Text, theme, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { CenteredView } from "./CenteredView";

interface Props {
  appTitle: string;
  developerName: string;
  developerLink: string;
}

export function Footer (props: Props) {
  const { appTitle, developerName, developerLink } = props;
  const { colorMode } = useColorMode();
  const linkColor = useColorModeValue(theme.colors.blue[600], theme.colors.blue[200]);

  return (
    <VStack
      align="stretch"
      backgroundColor={colorMode === "light" ? "whiteAlpha.800" : "whiteAlpha.200"}
    >
      <CenteredView p={4}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 1, lg: 4 }}
          align="flex-start"
        >
          <Text fontSize="sm" fontWeight="thin">
            Copyright © {dayjs().format("YYYY")} {appTitle} - All rights reserved.
          </Text>
          <Spacer />
          <Text fontSize="sm">
            Developed by <ChakraLink
              href={developerLink}
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
            >
              {developerName}
            </ChakraLink>
          </Text>
        </Stack>
      </CenteredView>
    </VStack>
  )
}