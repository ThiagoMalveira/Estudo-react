import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { api } from '../services/api';

import styles from './home.module.scss';

type Meals = {
    id: string,
    strMeal: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string
}

type HomeProps = {
    allMeals: Meals[];
}

export default function Home({allMeals} : HomeProps){
    return (
        <div className={styles.homepage}>
            <Head>
                <title>Home | Mama Gula</title>
            </Head>

            <section className={styles.latestMeals}>
                <h2>Todas receitas</h2>

                <ul>
                    {allMeals.map((allMeals) => {
                        return (
                            <li key={allMeals.id}>
                                <Image
                                    width={192}
                                    height={102}
                                    src={allMeals.strMealThumb}
                                    alt={allMeals.strMeal}
                                    objectFit="cover"
                                />

                                <div className={styles.MealsDetails}>
                                    <Link href={`/meals/${allMeals.id}`}>
                                        <a>{allMeals.strMeal}</a>
                                    </Link>
                                    <p>{allMeals.strArea}</p>
                                    <p>{allMeals.strTags}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('meals')

    const allMeals = data.map(Meals => {
        return {
            id: Meals.id,
            strMeal: Meals.strMeal,
            strArea: Meals.strArea,
            strInstructions: Meals.strInstructions,
            strMealThumb: Meals.file.url,
            strTags: Meals.strTags,
            strYoutube: Meals.strYoutube
        }
    })

    return {
        props: {
            allMeals
        },
        revalidate: 60 * 60 * 8,
    }
}

    