
import { useEffect, useReducer } from "react";
import { services } from "../../data/services";
import styles from "./index.module.css";
import { ServicesSearchBox } from "./ServicesSearchBox";
import { ServiceItem } from "./ServiceItem";
import { Section } from "@/components/Section";

const initialState = {
  list: services.list
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
  dir: 'asc',
  query: ''
}

const reducer = (state, { type, payload }) => {
  switch(type){
    case 'sort/asc':
      return {
        ...state,
        dir: 'asc',
        list: state.list
        .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
      }
    case 'sort/desc':
      return {
        ...state,
        dir: 'desc',
        list: state.list
        .sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase())),
      }
    case 'query':

      return {
        ...state,
        list: services.list
        .filter((item) => {
          let regex = new RegExp(payload.query, 'i');
          return regex.test(item.name); // outputs true
        }),
        query: payload.query
        
      }
    default:
      throw Error(`unkown action.type: ${type}`);
  }
}

export const Services = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    const { name, value} = e.target;

    if(name === 'dir'){
      dispatch({ type: `sort/${state.dir === 'asc' ? 'desc' : 'asc'}` });
    } else if (name === 'query') {
      dispatch({ type: `query`, payload: { query: value } });
    }
  }

  useEffect(() => {
    dispatch({type: `sort/${state.dir}`});
  }, [state.dir]);

  return <Section>
    <h3 className="title_text">{services.title}</h3>
    <p>{services.description}</p>
    
    <div
      className={styles.services_list}
    > 
      {state.list.map(item => {
        return <ServiceItem key={item.id} service={item}/>
      })}
      
    </div>
  </Section>
}