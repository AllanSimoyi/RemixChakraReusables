import type { BorderProps, StackProps } from "@chakra-ui/react";
import { Button, VStack } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export interface NavItem {
  text: string;
  href: string;
  primary?: boolean;
}

interface Props extends StackProps {
  navItem: NavItem;
  borderRadius?: BorderProps["borderRadius"];
}

export function ToolbarNavItem (props: Props) {
  const { navItem, borderRadius = 5, ...restOfProps } = props;

  return (
    <VStack
      key={navItem.text}
      align="stretch"
      p={0}
      {...restOfProps}
    >
      <Button
        as={Link}
        to={navItem.href}
        prefetch="intent"
        variant={navItem.primary ? "solid" : "ghost"}
        colorScheme={navItem.primary ? "primary" : undefined}
        fontWeight={navItem.primary ? "bold" : "thin"}
        fontSize="sm"
        borderRadius={borderRadius}
      >
        {navItem.text}
      </Button>
    </VStack>
  )
}