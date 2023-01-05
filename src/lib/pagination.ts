interface GetPageNumberProps {
  skip: number;
  take: number;
}
export function getPageNumber (props: GetPageNumberProps) {
  if (!props.take || !props.skip) {
    return 1;
  }
  return (props.skip / props.take) + 1;
}

interface GetNumPagesProps {
  numItems: number;
  take: number;
}
export function getNumPages (props: GetNumPagesProps) {
  if (!props.take || !props.numItems) {
    return 1;
  }
  return Math.ceil(props.numItems / props.take);
}