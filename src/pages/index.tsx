import Link from "next/link";
import { ContainerHome } from "../styles/pages";
import { GetServerSideProps } from "next";
import Image from "next/image";

interface News {
  title: string;
  image: string;
  description: string;
}


export default function Home({ news }) {

  return (
    <ContainerHome>
      {
        news.map((item: News) => {
          return (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <span>
                <img src={item.image} alt="imagem" width={4} height={4}/>
                <p>{item.description}</p>
                <Link href={`/new/${item.title}`}>
                  Ver notícia completa
                </Link>
              </span>
            </div>
          )
        }
        )
      }
    </ContainerHome>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const URL = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=dc0bca51b354335a2666ae0abaa8d50c';
  const response = await fetch(URL);
  const data = await response.json();
  const news = data.articles

  return {
    props: {
      news
    }
  }
}