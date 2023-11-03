import React, { useState } from "react"
import Tile from "./tile"


const initialTileState = new Array(25)
initialTileState.fill({color: "red"})
const TileList = () => {
  const [tiles, setTiles] = useState(initialTileState)
  const [flips, setFlips] = useState(0)

  // console.log(tiles)
  const onClick = event => {
    console.log(event)
    setFlips(flips + 1)
  }

  return (
    <>
    <h2>{flips}</h2>
    <div className="tileWrapper">
      <Tile tiles={tiles} onClick={onClick} />
    </div>
    </>
  )
}
export default TileList