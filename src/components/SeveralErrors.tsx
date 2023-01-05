import {
  Alert,
  AlertDescription,
  AlertIcon, AlertTitle, Box, Text
} from "@chakra-ui/react";

interface Props {
  errors: string[];
}

export function SeveralErrors (props: Props) {
  const { errors } = props;

  return (
    <Alert borderRadius={6} status="error" fontSize="sm" w={"auto"}>
      <AlertIcon />
      <Box>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {errors.map((error, index) => (
            <Text key={index} fontSize="sm">
              {error}
            </Text>
          ))}
        </AlertDescription>
      </Box>
    </Alert>
  )
}