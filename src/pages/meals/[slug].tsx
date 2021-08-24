import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { api } from '../../services/api';

import styles from './meals.module.scss';
import style from './ingredients.module.scss';

type Meals = {
    id: string,
    strMeal: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    Ingredient1: string,
    Ingredient2: string,
    Ingredient3: string,
    Ingredient4: string,
    Ingredient5: string,
    Ingredient6: string,
    Ingredient7: string,
    Ingredient8: string,
    Ingredient9: string,
    Ingredient10: string,
    Ingredient11: string,
    Ingredient12: string,
    Ingredient13: string,
    Ingredient14: string,
    Ingredient15: string,
    Ingredient16: string,
    Ingredient17: string,
    Ingredient18: string,
    Ingredient19: string,
    Ingredient20: string,
    Measure1: string,
    Measure2: string,
    Measure3: string,
    Measure4: string,
    Measure5: string,
    Measure6: string,
    Measure7: string,
    Measure8: string,
    Measure9: string,
    Measure10: string,
    Measure11: string,
    Measure12: string,
    Measure13: string,
    Measure14: string,
    Measure15: string,
    Measure16: string,
    Measure17: string,
    Measure18: string,
    Measure19: string,
    Measure20: string,
}

type MealsProps = {
    allMeals: Meals;
}

export default function Meals({allMeals}: MealsProps){
    return (
        <div className={styles.Meals}>
            <Head>
                <title>{allMeals.strMeal} | Mama Gula</title>
            </Head>

            <div className={styles.thumbnailContainer}>
                <Link href="/">
                    <button type="button">
                        <img src="/arrow-left.svg" alt="Voltar"></img>
                    </button>
                </Link>
                <Image
                    width={700}
                    height={160}
                    src={allMeals.strMealThumb}
                    objectFit="cover"
                />
            </div>
                <div className={style.ingredientsContainer}>
                    <ul>
                        <li>
                            {allMeals.Ingredient1} | {allMeals.Measure1} <br></br> <br></br>
                        </li>
                        <li>
                            {allMeals.Ingredient2} | {allMeals.Measure2} <br></br><br></br>
                        </li>
                        <li>
                            {allMeals.Ingredient3} | {allMeals.Measure3} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient4} | {allMeals.Measure4} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient5} | {allMeals.Measure5} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient6} | {allMeals.Measure6} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient7} | {allMeals.Measure7} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient8} | {allMeals.Measure8} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient9} | {allMeals.Measure9} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient10} | {allMeals.Measure10} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient11} | {allMeals.Measure11} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient12} | {allMeals.Measure12} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient13} | {allMeals.Measure13} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient14} | {allMeals.Measure14} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient15} | {allMeals.Measure15} <br></br><br></br>
                        </li>
                        <li> 
                            {allMeals.Ingredient16} | {allMeals.Measure16} <br></br><br></br>
                        </li>
                    </ul>
                </div>
                <div 
                        className={styles.instructions} 
                        dangerouslySetInnerHTML={{ __html: allMeals.strInstructions }}
                    /> 
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get('/meals')

    const paths = data.map(meals => {
        return {
            params: {
              slug: meals.id
            }
        }
    })
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => { 
    const { slug } = ctx.params;

    const { data } = await api.get(`/meals/${slug}`);

    const allMeals = {
            id: data.id,
            strMeal: data.strMeal,
            strArea: data.strArea,
            strInstructions: data.strInstructions,
            strMealThumb: data.file.url,
            strTags: data.strTags,
            strYoutube: data.strYoutube,
            Ingredient1: data.ingredients.strIngredient1,
            Ingredient2: data.ingredients.strIngredient2,
            Ingredient3: data.ingredients.strIngredient3,
            Ingredient4: data.ingredients.strIngredient4,
            Ingredient5: data.ingredients.strIngredient5,
            Ingredient6: data.ingredients.strIngredient6,
            Ingredient7: data.ingredients.strIngredient7,
            Ingredient8: data.ingredients.strIngredient8,
            Ingredient9: data.ingredients.strIngredient9,
            Ingredient10: data.ingredients.strIngredient10,
            Ingredient11: data.ingredients.strIngredient11,
            Ingredient12: data.ingredients.strIngredient12,
            Ingredient13: data.ingredients.strIngredient13,
            Ingredient14: data.ingredients.strIngredient14,
            Ingredient15: data.ingredients.strIngredient15,
            Ingredient16: data.ingredients.strIngredient16,
            Ingredient17: data.ingredients.strIngredient17,
            Ingredient18: data.ingredients.strIngredient18,
            Ingredient19: data.ingredients.strIngredient19,
            Ingredient20: data.ingredients.strIngredient20,
            Measure1: data.measure.strMeasure1,
            Measure2: data.measure.strMeasure2,
            Measure3: data.measure.strMeasure3,
            Measure4: data.measure.strMeasure4,
            Measure5: data.measure.strMeasure5,
            Measure6: data.measure.strMeasure6,
            Measure7: data.measure.strMeasure7,
            Measure8: data.measure.strMeasure8,
            Measure9: data.measure.strMeasure9,
            Measure10: data.measure.strMeasure10,
            Measure11: data.measure.strMeasure11,
            Measure12: data.measure.strMeasure12,
            Measure13: data.measure.strMeasure13,
            Measure14: data.measure.strMeasure14,
            Measure15: data.measure.strMeasure15,
            Measure16: data.measure.strMeasure16,
            Measure17: data.measure.strMeasure17,
            Measure18: data.measure.strMeasure18,
            Measure19: data.measure.strMeasure19,
            Measure20: data.measure.strMeasure20
        };


    return {
        props: {
            allMeals
        },
        revalidate: 60 * 60 * 8,
    }
}
