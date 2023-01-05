import type { IconButtonProps } from "@chakra-ui/react";
import { HStack, IconButton, Select, Stack, Text, VStack } from "@chakra-ui/react";
import { Form, useSubmit } from "@remix-run/react";
import type { ChangeEvent } from "react";
import { useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "tabler-icons-react";
import { usePagination } from "../hooks/usePagination";
import { PAGE_SIZE_OPTIONS } from "../lib/core.validations";

interface AccompanyingFieldsProps {
  accompanyingFields: { name: string; value: string }[];
}
function AccompanyingFields ({ accompanyingFields }: AccompanyingFieldsProps) {
  return (
    <>
      {accompanyingFields.map(field => (
        <input
          key={field.name}
          type="hidden"
          name={field.name}
          value={field.value}
        />
      ))}
    </>
  )
}

interface NavFormProps extends AccompanyingFieldsProps, IconButtonProps {
  take: number;
}
function PaginationButton (props: NavFormProps) {
  const { take, accompanyingFields, ...restOfProps } = props;

  return (
    <Form method="get">
      <AccompanyingFields accompanyingFields={accompanyingFields} />
      <input type="hidden" name="take" value={take} />
      <IconButton
        variant="ghost"
        type="submit"
        name="skip"
        {...restOfProps}
      />
    </Form>
  )
}

interface Props extends AccompanyingFieldsProps {
  skip: number;
  take: number;
  numItems: number;
}
export function CustomPagination (props: Props) {
  const { skip, take, numItems, accompanyingFields } = props;

  const submit = useSubmit();

  const { onFirstPage, onLastPage, skipValues } = usePagination({ numItems, skip, take });

  const handleChangePageSize = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    submit(event.currentTarget.form!, { method: "get" });
  }, [submit]);

  const startOfPage = useMemo(() => {
    return skip + 1;
  }, [skip]);

  const endOfPage = useMemo(() => {
    const skipTakeTotal = skip + take;
    if (skipTakeTotal > numItems) {
      return numItems;
    }
    return skipTakeTotal;
  }, [skip, take, numItems]);

  return (
    <Stack
      align="center"
      borderRadius={5}
      bgColor="blackAlpha.100"
      direction={{ base: "column", lg: "row" }}
    >
      <VStack align="stretch" px={2}>
        <Form method="get">
          <AccompanyingFields accompanyingFields={accompanyingFields} />
          <Select
            fontSize="sm"
            name="take"
            value={take}
            onChange={handleChangePageSize}
            placeholder="Items per page"
          >
            {PAGE_SIZE_OPTIONS.map(option => (
              <option key={option} value={option}>
                {option} per page
              </option>
            ))}
          </Select>
        </Form>
      </VStack>
      <HStack align="center" px={2}>
        <PaginationButton
          title="Go to first page"
          value={skipValues.firstPage}
          icon={<ChevronsLeft />}
          isDisabled={onFirstPage}
          aria-label='To First Page'
          take={take}
          accompanyingFields={accompanyingFields}
        />
        <PaginationButton
          title="Go to previous page"
          value={skipValues.previousPage}
          icon={<ChevronLeft />}
          isDisabled={onFirstPage}
          aria-label='To Previous Page'
          take={take}
          accompanyingFields={accompanyingFields}
        />
        <VStack justify="center" align="center" px={4}>
          <Text fontSize="sm">
            {startOfPage} - {endOfPage} of {numItems}
          </Text>
        </VStack>
        <PaginationButton
          title="Go to next page"
          value={skipValues.nextPage}
          icon={<ChevronRight />}
          isDisabled={onLastPage}
          aria-label='To Next Page'
          take={take}
          accompanyingFields={accompanyingFields}
        />
        <PaginationButton
          title="Go to last page"
          value={skipValues.lastPage}
          icon={<ChevronsRight />}
          isDisabled={onLastPage}
          aria-label='To Last Page'
          take={take}
          accompanyingFields={accompanyingFields}
        />
      </HStack>
    </Stack>
  )
}