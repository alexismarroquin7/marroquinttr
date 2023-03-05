import { services } from "../data/services";

export default function ServicesPage () {
  return <section>
    <h3>{services.title}</h3>
    <p>{services.description}</p>
    
    <label>Search for a service (ex. Oil Seal)
      <input 
        placeholder="Search for a service (ex. Oil Seal)"
      />
    </label>
    
    {services.list.map(item => {
      return <div
        key={item.id}
      >
        <p
          style={{fontWeight: "bold"}}
        >{item.name}</p>
      </div>
    })}
  </section>
}