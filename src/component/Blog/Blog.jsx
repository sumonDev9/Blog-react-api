import PropTypes from 'prop-types';
// icon
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddtoBookmark, handleMarkAsRead}) => {
    // console.log(blog)
    const {title, cover, author_img, author, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-16'>
            <img className='w-full rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-6'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold text-[#111111]'>{author}</h3>
                        <p className='font-semibold opacity-60 text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-[#111111] opacity-60 font-medium'>{reading_time} min read</span>
                    <button onClick={() => handleAddtoBookmark(blog)} className='ml-3'><FaRegBookmark ></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl my-4 text-[#111111] font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='mt-3 text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;
