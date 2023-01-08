import { Link as ChakraLink, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { Link, useCatch, useNavigate } from "@remix-run/react";
import { BoundaryError } from "./BoundaryError";
import { PrimaryButton } from './PrimaryButton';

import { useCallback } from "react";

interface Props {
  customerCareLink: string;
  loginLink: string;
}

export function RouteCatchBoundary ({ customerCareLink, loginLink }: Props) {
  const caught = useCatch();
  const navigate = useNavigate();

  const reload = useCallback(() => {
    navigate('.', { replace: true })
  }, [navigate]);

  switch (caught.status) {
    case 400: {
      return (
        <BoundaryError title="Error 400 - Bad Request">
          {caught.statusText && (
            <Text fontSize="sm" textAlign={"center"}>
              "{caught.statusText}"
            </Text>
          )}
          <Text fontSize="sm" textAlign={"center"}>
            We received a malformed or invalid request.
            Please review your input and ensure it is valid. <br />
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
    case 401: {
      return (
        <BoundaryError title="Error 401 - Unauthorised">
          {caught.statusText && (
            <Text fontSize="sm" textAlign={"center"}>
              "{caught.statusText}"
            </Text>
          )}
          <Text fontSize="sm" textAlign={"center"}>
            You're not authorised to access this resource.
            Please ensure you're logged in before requesting for this resource. <br />
            If the issue pesists,&nbsp;
            <ChakraLink color="blue.600" fontWeight={"semibold"} as={Link} to={customerCareLink}>
              contact Customer Care
            </ChakraLink>
          </Text>
          <Link prefetch="render" to={loginLink}>
            <PrimaryButton w="100%">
              Open Login Page
            </PrimaryButton>
          </Link>
        </BoundaryError>
      );
    }
    case 403: {
      return (
        <BoundaryError title="Error 403 - Forbidden">
          {caught.statusText && (
            <Text fontSize="sm" textAlign={"center"}>
              "{caught.statusText}"
            </Text>
          )}
          <Text fontSize="sm" textAlign={"center"}>
            You don't have permission to access this resource.
            Please ensure you're logged in using an account with the right access level. <br />
            If the issue pesists,&nbsp;
            <ChakraLink color="blue.600" fontWeight={"semibold"} as={Link} to={customerCareLink}>
              contact Customer Care
            </ChakraLink>
          </Text>
          <Link to={loginLink}>
            <PrimaryButton w="100%">
              Open Login Page
            </PrimaryButton>
          </Link>
        </BoundaryError>
      );
    }
    case 404: {
      return (
        <BoundaryError title="Error 404 - Resource Not Found">
          <VStack align="flex-start" px={6}>
            {caught.statusText && (
              <Text fontSize="sm" textAlign={"center"}>
                "{caught.statusText}"
              </Text>
            )}
            <Text fontSize="sm">
              We couldn't find that resource. <br />
            </Text>
            <VStack align="flex-start" py={2}>
              <Text fontSize="sm">
                This could've been because of any of the following:
              </Text>
              <UnorderedList textAlign="start">
                <ListItem>
                  The resource has moved.
                </ListItem>
                <ListItem>
                  The resource no longer exists.
                </ListItem>
                <ListItem>
                  You entered a slighly wrong URL, try checking for typos.
                </ListItem>
              </UnorderedList>
            </VStack>
            <Text fontSize="sm" textAlign="start">
              Please review the resource address and try again. <br />
              If the issue pesists,&nbsp;
              <ChakraLink color="blue.600" fontWeight={"semibold"} as={Link} to={customerCareLink}>
                contact Customer Care
              </ChakraLink>
            </Text>
          </VStack>
        </BoundaryError>
      );
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}, ${caught.statusText}`);
    }
  }
}