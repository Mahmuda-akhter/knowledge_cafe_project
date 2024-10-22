import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddToBookMark,handleMarkRead}) => {
    const {title ,id,cover,author_img,reading_time,author,posted_date,hashtags}=blog
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the tittle ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className=''>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookMark(blog)} 
                    className='ml-2 text-2xl'><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkRead(reading_time,id)} className='text-xl text-blue-600 font-bold underline'>mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog :  PropTypes.object.isRequired,
    handleAddToBookMark : PropTypes.func.isRequired,
    handleMarkRead : PropTypes.func
}
export default Blog;