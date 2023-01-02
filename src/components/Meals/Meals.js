import MealsSummary from "./MealsSummary";
import AvailableMeasls from "./AvailableMeals";
import {Fragment} from 'react';
const Meals = () => {

    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeasls />
        </Fragment>
    );

}

export default Meals;