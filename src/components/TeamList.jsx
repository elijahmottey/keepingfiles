import Team from './Team'

import Data from '../Data/data'

function TeamList() {
  console.log("love"+ Data)
  return (
    <div>
      {Data.map((item)=>( <Team key={item.name}  item={item} />))}
    </div>
  )
}

export default TeamList
