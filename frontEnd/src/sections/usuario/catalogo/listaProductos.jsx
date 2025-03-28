import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component"

const ListaProductos = () => {
  return (
    <>
        <InfiniteScroll
        dataLength={10}
        next={""}
        hasMore={false}
        loader= {<p>Cargando</p>}
        endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Ya no hay más productos</b>
            </p>
          }
        >

        </InfiniteScroll>
    </>
  )
}

export default ListaProductos