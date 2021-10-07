
// export const getData = async ({page , query , setImgList}) => {
//   const response = await fetch(
//     `https://api.pexels.com/v1/search/?page=1&per_page=15&query=people`,
//     {
//       headers: {
//         Authorization:
//           "563492ad6f9170000100000185593d04123c4ef7a739a2a30316216d",
//       },
//     }
//   );

//   const newData = await response.json();
 

//   setImgList(newData.photos);

// };



export const searchData = async ({ query , setImgList}) => {
  const response = await fetch(
    `https://api.pexels.com/v1/search/?page=1&per_page=15&query=${query}`,
    {
      headers: {
        Authorization:
          process.env.PEXELS_API_KEY,
      },
    }
  );

  const newData = await response.json();


  setImgList(newData.photos);


};


















// export const addAnotherPage = async ({ page , query , initialImgList , setImgList , initialNextPageList , setNextPageImgList}) => {
//   const response = await fetch(
//     `https://api.pexels.com/v1/search/?page=${page+1}&per_page=15&query=${query}`,
//     {
//       headers: {
//         Authorization:
//           "563492ad6f9170000100000185593d04123c4ef7a739a2a30316216d",
//       },
//     }
//   );
//   const newData = await response.json();

//   let newPhotos = newData.photos



//   // setImgList(newData.photos);

//    console.log(newPhotos)

//   // setImgList(...initialImgList, ...newPhotos);
 
 

 
//   // setImgList(newData.photos);
// };