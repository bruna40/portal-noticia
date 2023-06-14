import Link from "next/link";
import { ContainerHome } from "../styles/pages";
import { GetStaticProps } from "next";
import { fetchNews } from "../service/fetch";
import axios from "axios";
import { useRouter } from "next/router";


interface News {
  title: string;
  image: string;
  description: string;
}


export default function Home({ news }) {

  const router = useRouter();
  async function handleNews() {
    try {
      const response = await axios.get('/api/news', {
        title: news.title,
      });


      router.push(`/new/${response.data.title}`)
     

    } catch (error) {
      console.log(error);
    }
  }


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
                  <button onClick={handleNews}>Ver mais</button>
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


export const getStaticProps: GetStaticProps<any> = async () => {

  const news = await fetchNews();
  return {
    props: {
      news
    },
    revalidate: 60 * 60 * 1 //1 hora
  }
}