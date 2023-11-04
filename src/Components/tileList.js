import React, { useState } from "react"
import Tile from "./tile"
import initialTileState from "./tilesData"

const TileList = () => {
  const [tiles, setTiles] = useState(initialTileState)
  const [flips, setFlips] = useState(0)

  const onClick = event => {
    const currentId = event.target.id
    const changer = "tile" + currentId
    console.log(currentId)
    setFlips(flips + 1)
    if(event.target.name === "red") {
      console.log("hello")
      setTiles({...tiles, [changer]: "blue"})
    }
    if(event.target.name === "blue") {
      console.log("hello, but again!")
      setTiles({...tiles, [changer]: "red"})
    }
  }

  return (
    <>
    <h2>{flips}</h2>
    <h3>Please, make all the tiles blue!</h3>
    <div className="tileWrapper">
      <Tile tiles={Object.values(tiles)} onClick={onClick} />
    </div>
    </>
  )
}
export default TileList