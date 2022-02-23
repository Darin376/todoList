import { SinglePost } from '../SinglePost/SinglePost';

export const PostOutput = ({ postPage, pagesAll }) => (postPage.productsNew[pagesAll - 1].length === 0 ?
    (postPage.productsNew[pagesAll - 2].map(item => (
        <li key={item.id}>
            <SinglePost item={item} />
        </li>
    ))
    ) : (postPage.productsNew[pagesAll - 1].map(item => (
        <li key={item.id}>
            <SinglePost item={item} />
        </li>
    ))));