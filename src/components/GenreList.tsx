import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5];

  if (error) return null;

  if (isLoading)
    return (
      <>
        {" "}
        {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      </>
    );

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontSize={"md"}
              variant={"link"}
              onClick={() => {
                onSelectGenre(genre);
              }}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
