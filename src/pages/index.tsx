import Link from "next/link";
import { ContainerHome } from "../styles/pages";
import { useEffect, useState } from "react";


export default function Home() {
  const [news, setNews] = useState<any>([]) 
  const fetchAllData = async () => {
    try {
      const URL = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=dc0bca51b354335a2666ae0abaa8d50c';
      const response = await fetch(URL);
      const data = await response.json();
      setNews(data.articles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [])
  return (
    <ContainerHome>
      {
        news.map((item: any) => {
          return (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <span>
                <img src={item.image} alt="imagem" />
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
