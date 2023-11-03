import React, { useState } from "react"
import Tile from "./tile"


const initialTileState = new Array(25)
initialTileState.fill({color: "red"})
const TileList = () => {
  const [tiles, setTiles] = useState(initialTileState)
  const [flips, setFlips] = useState(0)

  // console.log(tiles)
  const onClick = event => {
    const currentId = event.target.id
    console.log(tiles[currentId].color)
    // console.log(currentId)
    setFlips(flips + 1)
    if(currentId == 5 || currentId == 10 || currentId == 15) {
      console.log("yo")
      // setTiles()
    }
  }

  return (
    <>
    <h2>{flips}</h2>
    <h3>Please, make all the tiles blue!</h3>
    <div className="tileWrapper">
      <Tile tiles={tiles} onClick={onClick} />
    </div>
    </>
  )
}
export default TileList