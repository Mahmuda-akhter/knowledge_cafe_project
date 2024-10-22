
import SingleBookmark from "../singleBookmark/SingleBookmark";
import PropTypes from "prop-types";


const BookMarks = ({bookmarks ,readingTime}) => {
    return (
        <div className="mt-4">
            <div className="text-3xl text-blue-700 font-bold bg-blue-100 rounded-xl p-6 border border-blue-400 text-center ml-6">  
                <h3>reading time : {readingTime}</h3>
            </div>
          
            <div className="bg-slate-200 ml-6 mt-4 p-4 w-96">
            <h2 className="text-center text-2xl font-semibold">Bookmarkd Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=> <SingleBookmark key={idx} bookmark={bookmark}></SingleBookmark>)
            }
            </div>

        
        </div>
    );
};
BookMarks.PropTypes ={
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number,
    
}
export default BookMarks;