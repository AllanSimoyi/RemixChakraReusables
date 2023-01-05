import type { ButtonProps} from "@chakra-ui/react";
import { Button, useColorMode } from "@chakra-ui/react";

interface Props extends ButtonProps{ }

export function ToggleColorMode (props: Props) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode} {...props}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}