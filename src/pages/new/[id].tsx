import { GetServerSideProps } from "next/types";
import { ContainerNew } from "./style";

export default function New({ news }: any) {

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

// como fazer o fetch de uma noticia especifica, que vem da pagina index.tsx, mas trazer pelo titulo

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { title } = context.query;
    const URL = `https://gnews.io/api/v4/search?q=${title}&lang=en&country=us&max=10&apikey=dc0bca51b354335a2666ae0abaa8d50c`;
    const response = await fetch(URL);
    const data = await response.json();
    const news = data.articles
    return {
        props: {
            news
        }
    }
}
