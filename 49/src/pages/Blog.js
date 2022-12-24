import BlogPosts from '../components/BlogPosts';

const posts = [
    {
        id: 1,
        title: 'Post 1',
        slug: 'slug_1',
        description: 'First Post description'
    },
    {
        id: 2,
        title: 'Post 2',
        slug: 'slug_2',
        description: 'Second Post description'
    },
    {
        id: 3,
        title: 'Post 3',
        slug: 'slug_3',
        description: 'Third Post description'
    }
]


function Blog() {
    return (
        <section>
            <h2>Blog</h2>
            <BlogPosts posts={posts}/>
        </section>
    )
}

export default Blog;