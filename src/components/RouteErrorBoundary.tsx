import { Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link, useNavigate } from "@remix-run/react";
import { BoundaryError } from "./BoundaryError";
import { PrimaryButton } from './PrimaryButton';

import { useCallback } from "react";

interface Props {
  error: Error;
  customerCareLink: string;
}

export function RouteErrorBoundary ({ error, customerCareLink }: Props) {
  const navigate = useNavigate();

  const reload = useCallback(() => {
    navigate('.', { replace: true })
  }, [navigate]);

  return (
    <BoundaryError title="Error 500 - Internal Server Error">
      <Text fontSize="sm" textAlign={"center"}>
        We encountered an unexpected error. <br />
        We're already working on fixing it. <br />
      </Text>
      {error.message && (
        <Text fontSize="sm" fontWeight={"semibold"} textAlign={"center"}>
          "{error.message}" <br />
        </Text>
      )}
      <Text fontSize="sm" textAlign={"center"}>
        Please try reloading the page. <br />
        If the issue pesists,&nbsp;
        <ChakraLink color="blue.600" fontWeight={"semibold"} as={Link} to={customerCareLink}>
          contact Customer Care
        </ChakraLink>
      </Text>
      <PrimaryButton onClick={reload}>
        Reload
      </PrimaryButton>
    </BoundaryError>
  );
}