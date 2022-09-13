import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [chargingCategories, setChargingCategories] = useState(false);

  useEffect(() => {
    const getCategoriesMap = async () => {
      setChargingCategories(true);

      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);

      setChargingCategories(false);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap, chargingCategories };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
