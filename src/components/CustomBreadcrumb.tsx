import type { ColorProps } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { ChevronRight } from "tabler-icons-react";

interface Item {
  value: string;
  href?: string;
}

interface Props {
  items: Item[]
  color: ColorProps["color"];
}

export function CustomBreadcrumb (props: Props) {
  const { items, color } = props;

  return (
    <Breadcrumb
      spacing='8px'
      separator={<ChevronRight color='black' />}
    >
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;
        return (
          <BreadcrumbItem
            key={index}
            color={isLastItem ? undefined : color}
            isCurrentPage={isLastItem ? true : undefined}
          >
            {item.href && (
              <BreadcrumbLink as={Link} to={item.href}>
                {item.value}
              </BreadcrumbLink>
            )}
            {!item.href && (
              <Text size="sm">
                {item.value}
              </Text>
            )}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}