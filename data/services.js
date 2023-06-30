import { v4 as uuid } from "uuid";

export const services = {
  title: "Services",
  description: "We offer a comprehensive range of maintenance and repair services to keep your trucks and trailers running.",
  list: [
    {
      id: uuid(),
      name: 'Tires',
      open: false,
      sub_list: [
        {
          id: uuid(),
          name: "Flats"
        },
        {
          id: uuid(),
          name: "Replacement"
        },
      ]
    },
    {
      id: uuid(),
      name: 'Brakes',
      open: false,
      sub_list: [
        {
          id: uuid(),
          name: "Replacement"
        },
        {
          id: uuid(),
          name: "Adjustment"
        },
      ]
    },
    {
      id: uuid(),
      name: 'Hoses',
      open: false,
      sub_list: [
        {
          id: uuid(),
          name: "Emergency Hoses"
        },
        {
          id: uuid(),
          name: "Service Hoses"
        },
      ]
    },
    {
      id: uuid(),
      name: 'Welding',
      open: false,
      sub_list: [
        {
          id: uuid(),
          name: "Liftgate"
        }
      ]
    }
  ]
}