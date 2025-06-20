export default function BlogCard({
  author,
  title,
  image,
  date,
  description,
  content,
}) {
  return (
    <div className="m-10 text-white bg-gray-700 rounded-md p-5">
      {/*Top Layer*/}
      <div className="flex justify-between p-2">
        <div className="text-white">Author : {author}</div>
        <div>
          <div className="text-white">Uploaded : {date.slice(0, 10)}</div>
        </div>
      </div>
      <div className="text-white p-2 text-2xl">{title}</div>

      {/*Content Layer Layer*/}
      <div className="flex p-2 gap-2">
        <img src={image} className="max-h-[20rem] max-w-[20rem]" alt="" />
        <div className="text-white">
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}
