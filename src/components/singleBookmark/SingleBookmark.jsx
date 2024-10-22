


const SingleBookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className="bg-white text-2xl p-4 m-4 rounded-xl ">
          <h3>{title}</h3>
        </div>
    );
};

export default SingleBookmark;