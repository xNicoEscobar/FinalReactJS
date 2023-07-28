import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Deliciosa comida, en tu casa</h2>
            <p>
                Te ofrecemos las variedades mas deliciosas para que puedas disfrutar tu
                almuerzo o cena en tu misma casa.
            </p>
            <p>
                Todas nuestras comidas son preparadas con ingredientes de alta calidad,
                a tiempo, y por supuesto con increíbles cocineros!
            </p>
        </section>
    );
};

export default MealsSummary;
