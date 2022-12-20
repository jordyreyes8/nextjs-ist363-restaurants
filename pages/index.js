import { useState } from 'react'

import Button from '../components/Button'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Filters from '../components/Filters'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'

import { getAllRestaurants, getAllRestaurantTypes } from '../lib/api'

export async function getStaticProps() {
  const restaurants = await getAllRestaurants();
  const restaurantTypes = await getAllRestaurantTypes();
  return {
    props: {
      restaurants,
      restaurantTypes
    }, // will be passed to the page component as props
  }
}

const HomePage = ({ restaurants, restaurantTypes }) => {
  // [state variable, setter function]
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredRestaurants = restaurants.filter((restaurant) => {
      if (activeCategory === "All") {
        return restaurant;
      }
      if (restaurant.node.restaurantTypes.edges.length > 0) {
        return restaurant.node.restaurantTypes.edges[0].node.name === activeCategory ? 
          restaurant 
        : false;
      }
  });
  return <Layout>
    <Showcase 
      title="A guide to my favorite food spots in Syracuse."
      description="There are a ton of food options in the Syracuse Area. The options are diverse and can satisfy anybody's pallete!"
      cta="View Restaurants"
    />
    <section>
      <Container>
          <Filters 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={restaurantTypes}
          />
          <Grid data={filteredRestaurants} />
      </Container>
    </section>
  </Layout>
}
export default HomePage