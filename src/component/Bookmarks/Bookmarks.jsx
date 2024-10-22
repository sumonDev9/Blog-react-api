import PropTypes from 'prop-types';
import Bookmark from '../bookmark/bookmark';

const Bookmarks = ({bookmark, readingtime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 pt-4">
            <div className='border-blue-900 border-2 rounded-md text-center  p-3 m-2'>
                <h3 className="text-2xl text-[#6047EC] font-bold">Reading Time: {readingtime}</h3>
            </div>
            <h2 className="text-2xl text-[#111111] font-bold text-center ">BookMarked Blogs: {bookmark.length}</h2>
            {
                bookmark.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readingtime: PropTypes.number
}


export default Bookmarks;