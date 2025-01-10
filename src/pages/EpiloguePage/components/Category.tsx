import React from 'react';
import * as S from '../EpiloguePage.style';

interface CategoryProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  // categories를 두 개씩 묶기
  const groupedCategories = categories.reduce<string[][]>((acc, category, index) => {
    if (index % 2 === 0) {
      acc.push([category]);
    } else {
      acc[acc.length - 1].push(category);
    }
    return acc;
  }, []);

  return (
    <S.Container1>
      {groupedCategories.map((group, rowIndex) => (
        <S.Row key={rowIndex}>
          {group.map((category, index) => (
            <S.Category
              key={index}
              onClick={() => setSelectedCategory(category)}
              isSelected={selectedCategory === category}
            >
              <span>{category}</span>
            </S.Category>
          ))}
        </S.Row>
      ))}
    </S.Container1>
  );
};

export default Category;
