import { createContext, useContext, useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "./../utils/fetchData";

const cardContext = createContext();

export function CardContextProvider({ children }) {

  const [exerciseData, setExerciseData] = useState([])
  const [exerciseCategoryData, setExerciseCategoryData] = useState([])

  const exerciseBodyPartData = async () => {
    const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    setExerciseCategoryData(data)
  }
  const exerciseAPIData = async () => {
    const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    setExerciseData(data)
  } 
  
  
  useEffect(() => {
    exerciseAPIData();
    exerciseBodyPartData()
  }, [])


  return <cardContext.Provider value={{
    exerciseData,
    exerciseCategoryData
  }}>{children}</cardContext.Provider>
};

export function useCardContext() {
  return useContext(cardContext);
}


// import { createContext, useContext } from "react";

// const cardContext = createContext();

// export function CardContextProvider({ children }) {
//   const testingContent = 'tesing content';

//   return <cardContext.Provider value={{
//     testingContent
//   }}>{children}</cardContext.Provider>;
// }

// export function useCardContext() {
//   return useContext(cardContext);
// }