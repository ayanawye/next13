import { Metadata } from "next";
import { FC } from "react";

type Props = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return resp.json();
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

const Post: FC<Props> = async ({ params: { id } }) => {
  const { title, body } = await getData(id);
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>{title}</h2>
      <p style={{textAlign: "center", marginTop: "20px" }}> {body}</p>
    </div>
  );
};

export default Post;
