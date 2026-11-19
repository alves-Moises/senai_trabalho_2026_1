import { Container } from "./style"
export default function Footer(){
    return (
        <Container>
            <p>© {new Date().getFullYear()} Alves Informatica, all rights reserved.</p>
        </Container>
    )
}