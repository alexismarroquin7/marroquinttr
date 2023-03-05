import { v4 as uuid } from "uuid";

export const services = {
  title: "Services",
  description: "Welcome to Marroquin Truck & Trailer Repair's Services page. We offer a comprehensive range of maintenance and repair services to keep your trucks and trailers running smoothly. Our experienced technicians are dedicated to providing high-quality workmanship and exceptional customer service. Browse our services below to see how we can help you keep your vehicles in top condition.",
  list: [
    {
      id: uuid(),
      name: 'Oil Change',
      description: 'Regular oil changes are crucial to keep your engine running smoothly and extend its lifespan. Our technicians use high-quality oil and filters to ensure optimal performance and fuel efficiency.'
    },
    {
      id: uuid(),
      name: 'Brake Inspection',
      description: 'Brakes are a critical safety feature of any vehicle, and regular inspections can help prevent accidents and costly repairs. We use advanced diagnostic tools to check your brakes and replace any worn or damaged parts.'
    },
    {
      id: uuid(),
      name: 'Tire Repair',
      description: 'Flat tires can be a major inconvenience, but our technicians are equipped to handle any tire repair or replacement needs. We use state-of-the-art equipment and high-quality tires to get you back on the road safely.'
    },
    {
      id: uuid(),
      name: 'Welding Services',
      description: 'From minor repairs to custom fabrication, our welding services can help you address a wide range of issues with your truck or trailer. We use the latest techniques and equipment to ensure a strong and lasting repair.'
    },
    {
      id: uuid(),
      name: 'Emergency Roadside Assistance',
      description: 'Breakdowns can happen anytime, anywhere, which is why we offer 24/7 emergency roadside assistance. Whether you need a jump start, fuel delivery, or a tow, our experienced technicians are ready to help.'
    }
  ]
}