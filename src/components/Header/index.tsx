import Link from "next/link";
import { ContainerHeader } from "./style";

export default function Header() {
    return (
        <ContainerHeader>
            <h1>Notícias</h1>
            <div>
                <Link href="/">
                    Home
                </Link>
            </div>
        </ContainerHeader>
    )
}