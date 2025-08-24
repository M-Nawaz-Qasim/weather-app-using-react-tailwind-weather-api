import { useEffect, useState } from 'react'

function Fetch() {
    const [Data,SetData] = useState([]);
    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Lahore&appid=2ac3bbc38ab3ee9a8d356ce80137e683&units=metric")
            .then((res) => res.json())
            .then((data) => {console.log(data),SetData(data)})
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
        {
            Data.length > 0 ? (Data.map((abc)=>{
                <h2 className="text-2xl">{abc.city}</h2>
            })) : ( <p className='text-2xl'>Abhi Data aa Rha hay</p> )
        }
        </>
    )
}

export default Fetch
