import { useRouter } from 'next/router'
import Layout from './comps/MyLayout'


const Content = () => {
    const router = useRouter()

    return (
        <Layout type="no_header">
            <h1>{router.query.judul}</h1>
            <p>This is blog post content</p>
        </Layout>
    )
}

const Page = () =>(
    <Layout>
        <Content/>
    </Layout>
)

export default Page