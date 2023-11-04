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
    const name = event.target.name

    setFlips(flips + 1)
    if(name === "false") {
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