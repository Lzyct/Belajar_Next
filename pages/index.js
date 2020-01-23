import Layout from './comps/MyLayout'
import Link from 'next/link'

const PostLink = props =>(
    <li>
        <Link href={`/post?judul=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => (
    <Layout >
        <h1>Insert Code</h1>
        <ul>
            <PostLink title="Home"></PostLink>
            <PostLink title="Portfolio"></PostLink>
            <PostLink title="Blog"></PostLink>
        </ul>
    </Layout>
);

export default Index;