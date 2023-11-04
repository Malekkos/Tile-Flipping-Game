import React from "react"

const Tile = props => {
  const tiles = props.tiles
  const onClick = props.onClick
  return (
    <>
    {tiles.map((tile, idx) => {
      return (
        <>
        <input onClick={(event) => onClick(event)} type="button" name={`${tile}`} className={"button" + tile + " button"} key={idx} id={idx} />
        </>
      )
    })}
    </>

  )
}


export default Tile