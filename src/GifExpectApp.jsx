import React, { useState } from 'react'
import { AddCategory, GifGrid } from './componets';

export const GifExpectApp = () => {

  const [categories, setCategories] = useState(['one puch',]);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);

  }
  return (
    <>
      <h1>GifExpectApp</h1>

      <AddCategory onNewCategory={onAddCategory}
      />
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}
