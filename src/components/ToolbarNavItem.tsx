import type { BorderProps, ButtonProps, StackProps } from "@chakra-ui/react";
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
  buttonProps?: ButtonProps;
}

export function ToolbarNavItem (props: Props) {
  const { navItem, borderRadius = 5, buttonProps, ...restOfProps } = props;

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
        variant={navItem.primary ? "solid" : "outline"}
        colorScheme={navItem.primary ? "primary" : undefined}
        fontWeight={navItem.primary ? "bold" : "thin"}
        fontSize="sm"
        borderRadius={borderRadius}
        {...buttonProps}
      >
        {navItem.text}
      </Button>
    </VStack>
  )
}