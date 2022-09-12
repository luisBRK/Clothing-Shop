import { CategoryItemContainer, BackgroundImage, Body, Title, Text } from "./directory-item-category.styles";

const DirectoryItemCategory = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <Title>{title}</Title>
        <Text>Shop now</Text>
      </Body>
    </CategoryItemContainer>
  );
};

export default DirectoryItemCategory;
