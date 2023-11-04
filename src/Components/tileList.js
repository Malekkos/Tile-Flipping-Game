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
  const onClick = event => {
    const currentId = event.target.id
    const changer = "tile" + currentId
    const neighborUp = "tile" + [currentId - 5] 
    const neighborDown = "tile" + [currentId * 1 + 5 ]
    const neighborRight = "tile" + [currentId * 1 + 1]
    const neighborLeft = "tile" + [currentId - 1]
    const name = event.target.name
    // console.log("down: ", neighborDown, "up: ", neighborUp, "left: ", neighborLeft, "right: ", neighborRight) //Logic is correct here
    // console.log(neighborUp, neighborDown,)
    setFlips(flips + 1)
    if(name === "false") {
      // console.log("hello")
      if(currentId === "0") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborDown]: !tiles[neighborDown], [neighborRight]: !tiles[neighborRight]})
      } else if (currentId === "4") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborDown]: !tiles[neighborDown], [neighborLeft]: !tiles[neighborLeft]})
      } else if (currentId === "20") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborRight]: !tiles[neighborRight] })
      } else if (currentId === "24") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborLeft]: !tiles[neighborLeft] })
      }
      if(currentId === "5" || currentId === "10" || currentId === "15") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborDown]: !tiles[neighborDown], [neighborRight]: !tiles[neighborRight]})
      }
      if(currentId === "1" || currentId === "2" || currentId === "3") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborLeft]: !tiles[neighborLeft], [neighborDown]: !tiles[neighborDown], [neighborRight]: !tiles[neighborRight]})
      }
      if(currentId === "21" || currentId === "22" || currentId === "23") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborLeft]: !tiles[neighborLeft], [neighborUp]: !tiles[neighborUp], [neighborRight]: !tiles[neighborRight]})
      }
      if(currentId === "9" || currentId === "14" || currentId === "19") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborLeft]: !tiles[neighborLeft], [neighborDown]: !tiles[neighborDown]})
      }
      if(currentId === "6" || currentId === "7" || currentId === "8" || currentId === "11" || currentId === "12" || currentId === "13" || currentId === "16" || currentId === "17" || currentId === "18") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborLeft]: !tiles[neighborLeft], [neighborDown]: !tiles[neighborDown], [neighborRight]: !tiles[neighborRight]})
      }
    }
    if(event.target.name === "true") {
      // console.log("hello, but again!")
      if(currentId === "0") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborDown]: !tiles[neighborDown], [neighborRight]: !tiles[neighborRight]})
      } else if (currentId === "4") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborDown]: !tiles[neighborDown], [neighborLeft]: !tiles[neighborLeft]})
      } else if (currentId === "20") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborRight]: !tiles[neighborRight] })
      } else if (currentId === "24") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborLeft]: !tiles[neighborLeft] })
      }
      if(currentId === "5" || currentId === "10" || currentId === "15") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborDown]: !tiles[neighborDown], [neighborRight]: !tiles[neighborRight]})
      }
      if(currentId === "1" || currentId === "2" || currentId === "3") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborLeft]: !tiles[neighborLeft], [neighborDown]: !tiles[neighborDown], [neighborRight]: !tiles[neighborRight]})
      }
      if(currentId === "21" || currentId === "22" || currentId === "23") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborLeft]: !tiles[neighborLeft], [neighborUp]: !tiles[neighborUp], [neighborRight]: !tiles[neighborRight]})
      }
      if(currentId === "9" || currentId === "14" || currentId === "19") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborLeft]: !tiles[neighborLeft], [neighborDown]: !tiles[neighborDown]})
      }
      if(currentId === "6" || currentId === "7" || currentId === "8" || currentId === "11" || currentId === "12" || currentId === "13" || currentId === "16" || currentId === "17" || currentId === "18") {
        setTiles({...tiles, [changer]: !tiles[changer], [neighborUp]: !tiles[neighborUp], [neighborLeft]: !tiles[neighborLeft], [neighborDown]: !tiles[neighborDown], [neighborRight]: !tiles[neighborRight]})
      }
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