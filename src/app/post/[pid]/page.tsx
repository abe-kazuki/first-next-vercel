"use client";
type Props = { params: { pid: string } };

function Post({ params: { pid } }: Props) {
  return (
    <p>Post: {pid}</p>
  )
}

export default Post