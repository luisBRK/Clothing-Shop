import { useNavigate } from "react-router-dom";
import { CategoryItemContainer, BackgroundImage, Body, Title, Text } from "./directory-item-category.styles";

const DirectoryItemCategory = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <Title>{title}</Title>
        <Text>Shop now</Text>
      </Body>
    </CategoryItemContainer>
  );
};

export default DirectoryItemCategory;
