import { useParams } from "react-router-dom";

export default function Blogs() {
  const { blogId } = useParams();
  console.log(blogId);
  return (
    <>
      <div className="text-white">{blogId}</div>
    </>
  );
}
