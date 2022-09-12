import DirectoryItemCategory from "../directory-item-category/directory-item-category.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItemCategory category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
