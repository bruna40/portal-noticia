import { useRouter } from "next/router";
import { ContainerNew } from "./style";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchNewTitles, getNews } from "../../service/fetch";

export default function New({news}) {

    const { isFallback } = useRouter();

    if(isFallback) {
        return <p>Carregando...</p>
    }

  return (
    <ContainerNew>
        {
            news.map((item: any) => {
                return (
                    <>
                        <h1>{item.title}</h1>
                        <p>Autor: {item.source.name}</p>
                        <article>
                            {item.content}
                        </article>
                    </>
                )
            }
            )
        }
    </ContainerNew>

  )
}


export const getStaticPaths: GetStaticPaths = async () => {

    const titles = await fetchNewTitles();

    const paths = titles.map((title: string) => {
        return {params: {title}}
    })

    return{
        paths: paths,
        fallback: true
    }
}


export const getStaticProps: GetStaticProps<any, { title: string} > = async ({params}) => {
    const title = params.title;
    try {
        const news = await getNews(title);

        if(!news) {
            return {
                redirect: {
                    destination: '/error',
                    permanent: false,
                }
            }
        }
        return {
            props: {
                news
            },

            revalidate: 60 * 60 * 1 //1 hora
    
        }

    } catch (error) {
        return {
            redirect: {
                destination: '/error',
                permanent: false,
            }
        }
    }
}