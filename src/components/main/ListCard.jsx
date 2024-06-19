import Card from "./Card"
import { dataList } from '../../data/dataList'
import { useState } from "react"
const ListCard = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtredList = dataList.filter((item) => (item.name.toLowerCase().includes(search.toLowerCase())))
    .filter((item) => (item.category==category || category==='All'))

  let categorys = []
  dataList.map((data, index) => {
    if (!categorys.includes(data.category)) {
      return categorys.push(data.category)
    }
  })

  return (
    <section>
      <div className="search">
        <select name="categories" id="categories" onChange={(e)=>setCategory(e.target.value)}>
          <option value="All">All</option>

          {categorys.map((data, index) => (
            <option value={data} key={index}>{data}</option>
          ))}

        </select>
        <div>
          <input type="text" placeholder="Search your product" value={search} onChange={(e) => setSearch(e.target.value)} name="search" id="search" />
          <button>Search</button>
        </div>
      </div>
      <div className="cardList">
        {
          filtredList.map((data) => (
            <Card product={data} key={data.id} />
          ))
        }
      </div>

    </section>
  )
}

export default ListCard