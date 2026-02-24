import {useEffect, useState} from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import DishCard from './components/DishCard'
import './App.css'

const dishesApiUrl =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

function App() {
  const [menu, setMenu] = useState([])
  const [activeTab, setActiveTab] = useState('')
  const [restaurantName, setRestaurantName] = useState('')

  useEffect(() => {
    const getMenu = async () => {
      const response = await fetch(dishesApiUrl)
      const data = await response.json()

      setRestaurantName(data[0].restaurant_name)

      const categories = data[0].table_menu_list
      setMenu(categories)
      setActiveTab(categories[0].menu_category)
    }

    getMenu()
  }, [])

  const activeCategory = menu.find(item => item.menu_category === activeTab)

  return (
    <div className="app">
      <Header restaurantName={restaurantName} />

      <CategoryTabs
        categories={menu}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="dishes-container">
        {activeCategory &&
          activeCategory.category_dishes.map(dish => (
            <DishCard key={dish.dish_id} dish={dish} />
          ))}
      </div>
    </div>
  )
}

export default App
