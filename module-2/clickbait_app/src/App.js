import styles from './styles';
import BlogTile from "./BlogTile";

const posts = [
    {id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
    {id: 2, title: 'Wszyscy zazdroszczą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
    {
        id: 3, title: 'Adam Małysz Zgolił wąs',
        intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
    }
];

function App() {
    return (
        <div style={styles.newsContainer}>
            {posts.map((post) =>
                <BlogTile key={`post-${post.id}`} title={post.title} intro={post.intro}/>)}
        </div>
    );
}

export default App;
