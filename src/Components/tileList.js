import React, { useState } from "react"
import Tile from "./tile"
import initialTileState from "./tilesData"

const TileList = () => {
  const [tiles, setTiles] = useState(initialTileState)
  const [flips, setFlips] = useState(0)

  // console.log(tiles)
  const onClick = event => {
    const currentId = event.target.id
    const changer = "tile" + currentId
    // console.log(changer)
    console.log(currentId)
    // const currentColor = tiles[currentId].color
    setFlips(flips + 1)
    setTiles({...tiles, [changer]: "blue"})
    // console.log(currentColor)

    // if(currentId == 5 || currentId == 10 || currentId == 15) {
    //   setTiles({color: "red"})
    // }
  }

  return (
    <>
    <h2>{flips}</h2>
    <h3>Please, make all the tiles blue!</h3>
    <div className="tileWrapper">
      <Tile tiles={[tiles]} onClick={onClick} />
    </div>
    </>
  )
}
export default TileList