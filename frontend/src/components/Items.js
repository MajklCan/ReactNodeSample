import React,{useState,useEffect} from 'react'



export const Items = () => {

    const [items, setItems] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3030/api/data")
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result.items);
            },
            (error) => {
                console.error(error)
                setError("Chyba")
            }
          )
      }, [])

      if(error) return error
      
      if(!items) return "Načítání..."

      return (
        <div>
            <h3>Nákupní košík</h3>
            <ol>
            {items.map( item => (
                <li>{item.name} ({item.price})</li>
            ))}
            </ol>
        </div>
    )
}
