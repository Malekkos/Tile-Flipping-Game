import React, { useState } from "react"
import Tile from "./tile"
import initialTileState from "./tilesData"

const TileList = () => {
  const [tiles, setTiles] = useState(initialTileState)
  const [flips, setFlips] = useState(0)

  /*


  NOTE
  YOU CAN MAYBE CHANGE THE DATA FIELDS OF EITHER RED OR BLUE TO BE TRUE OR FALSE
  THEN, DEPENDING IF ITS TRUE OR FALSE, ALIGN IT TO THE COLOR. AKA TRUE IS BLUE AND RED IS FALSE
  FOR PASSING IT DOWN INTO THE TILE COMPONENT, IT SHOULD READ A VALUE OF TRUE OR FALSE AND CHANGE ACCORDINGLY.
  MAYBE SETUP A VARIBALE IN THE MAP TO CHANGE THE VALUE OF FALSE TO SOMETHING ELSE

  */
  const lol = "not funny"





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