import React, { useState } from "react"
import Tile from "./tile"
import initialTileState from "./tilesData"

const TileList = () => {
  const [tiles, setTiles] = useState(initialTileState)
  const [flips, setFlips] = useState(0)

  const onClick = event => {
    const currentId = event.target.id
    const changer = "tile" + currentId
    const neighborUp = "tile" + [currentId - 5] 
    const neighborDown = "tile" + [currentId * 1 + 5 ]
    const neighborRight = "tile" + [currentId * 1 + 1]
    const neighborLeft = "tile" + [currentId - 1]
    // console.log("down: ", neighborDown, "up: ", neighborUp, "left: ", neighborLeft, "right: ", neighborRight) //Logic is correct here
    setFlips(flips + 1)
    if(event.target.name === "red") {
      // console.log("hello")
      if(currentId === "0") {
        setTiles({...tiles, [changer]: "blue", [neighborDown]: "blue", [neighborRight]: "blue"})
      } else if (currentId === "4") {
        setTiles({...tiles, [changer]: "blue", [neighborDown]: "blue", [neighborLeft]: "blue"})
      } else if (currentId === "20") {
        setTiles({...tiles, [changer]: "blue", [neighborUp]: "blue", [neighborRight]: "blue" })
      } else if (currentId === "24") {
        setTiles({...tiles, [changer]: "blue", [neighborUp]: "blue", [neighborLeft]: "blue" })
      }
      if(currentId === "5" || currentId === "10" || currentId === "15") {
        setTiles({...tiles, [changer]: "blue", [neighborUp]: "blue", [neighborDown]: "blue", [neighborRight]: "blue"})
      }
    }
    if(event.target.name === "blue") {
      // console.log("hello, but again!")
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