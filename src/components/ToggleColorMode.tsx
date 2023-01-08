import { IconButton, IconButtonProps, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "tabler-icons-react";

interface Props extends IconButtonProps { }

export function ToggleColorMode (props: Props) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      icon={colorMode === "dark" ? <Sun /> : <Moon />}
      {...props}
    />
  )
}