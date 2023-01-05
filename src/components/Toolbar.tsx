import { Show, Spacer, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { AppTitle } from "./AppTitle";
import { CenteredView } from "./CenteredView";
import { ToolbarNavItem } from "./ToolbarNavItem";

export interface ToolbarProps {
  appTitle: string;
  currentUserName: string | undefined;
}

export function Toolbar (props: ToolbarProps) {
  const { appTitle, currentUserName } = props;
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.2)");

  return (
    <VStack
      w="100%"
      as="header"
      zIndex={99}
      boxShadow="sm"
      align={"stretch"}
      position="relative"
      backdropFilter="saturate(180%) blur(5px)"
      backgroundColor={bgColor}
      style={{ position: 'sticky' }}
      sx={{ position: '-webkit-sticky', top: '0' }}
    >
      <CenteredView>
        <Stack
          py={4}
          px={4}
          spacing={{ base: 2, lg: 6 }}
          align={{ base: "stretch", lg: "center" }}
          direction={{ base: "column", lg: "row" }}
        >
          <AppTitle title={appTitle} />
          <Spacer />
          <Show above="lg">
            {!currentUserName && (
              <ToolbarNavItem
                navItem={{
                  text: "Create Account",
                  href: "/join",
                  primary: true,
                }}
              />
            )}
            {currentUserName && (
              <Text fontSize="sm" title={currentUserName}>
                {currentUserName}
              </Text>
            )}
          </Show>
        </Stack>
      </CenteredView>
    </VStack>
  )
}