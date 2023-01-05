import { Spacer, VStack } from "@chakra-ui/react";
import type { ToolbarProps } from "./Toolbar";
import { Toolbar } from "./Toolbar";
import { CenteredView } from "./CenteredView";
import { Footer } from "./Footer";

interface Props extends ToolbarProps {
  children: React.ReactNode;
  appTitle: string;
  developerName: string;
  developerLink: string;
}

export function ToolbarLayout (props: Props) {
  const { children, appTitle, developerName, developerLink, ...restOfProps } = props;

  return (
    <VStack align="stretch" spacing={0} minH="100vh" flexGrow={1}>
      <Toolbar
        appTitle={appTitle}
        {...restOfProps}
      />
      <VStack align="stretch" py={8} as="main">
        <CenteredView flexGrow={1} p={4}>
          {children}
        </CenteredView>
      </VStack>
      <Spacer />
      <Footer
        appTitle={appTitle}
        developerName={developerName}
        developerLink={developerLink}
      />
    </VStack>
  )
}