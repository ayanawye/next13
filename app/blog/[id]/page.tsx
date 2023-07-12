import { Metadata } from "next";
import { FC } from "react";

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({params: {id}} : Props): Promise<Metadata>{
  return {
    title: id
  }
}

const Blog: FC<Props> = ({params: {id}}) => {
  return (
    <div>
      <h2>Blog number {id}</h2>
    </div>
  );
};

export default Blog;