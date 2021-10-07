import React from 'react'
import Masonry from 'react-masonry-css'
import './login.css'

export const LoginPage = () => {

var items = [
  {id: 1, name: 'My First Item'},
  {id: 2, name: 'Another item'},
  {id: 3, name: 'Third Item'},
  {id: 4, name: 'Here is the Fourth'},
  {id: 5, name: 'High Five'}
];

items = items.map(function(item) {
  return <div key={item.id}>{item.name}</div>
})

   const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };
  


     return (
          <div>
               login page
<Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
>
  {items}
</Masonry>


          </div>
     )
}
