import {
  Box,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack padding="6" boxShadow="lg">
      <Skeleton width={"32px"} height={"32px"} />
      <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
    </HStack>
  );
};

export default GenreListSkeleton;
