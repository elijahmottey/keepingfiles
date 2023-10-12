

function Team({item}) {
console.log(item)
  return (
    <div className='team'>
        <p>{item.description}</p>
      <figure> 
        <img src={item.image} alt="ceo"/>
          </figure>
    <h3>{item.name}</h3>
    <p>{item.position}</p>

    </div>
  )
}

export default Team
