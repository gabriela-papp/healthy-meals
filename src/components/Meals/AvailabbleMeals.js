import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
import './AvailableMeals.styles.css'
const HEALTHY_DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Greek Salad',
    description: 'With healthy salad dressing',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Veggie Burger',
    description: 'American, delicious,colorful',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green... and a bit of crunch',
    price: 18.99,
  },
];
const AvailableMeals=()=>{
    const mealList=HEALTHY_DUMMY_MEALS.map((meal,id)=>{
                    return <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
                })
    return(
        <section className='meals'>
          <Card>
            <ul>
                {mealList}
            </ul>
          </Card>
        </section>
    )
}
export default AvailableMeals