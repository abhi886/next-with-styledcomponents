import SingleBlog from "../../src/components/Blogs/singleBlog";
import { getAllBlogIds, getBlogsData } from "../../src/lib/blog";
import { Container } from "react-bootstrap";
import Link from "next/link";

import styled from "styled-components";

const BlogDiv = styled(Container)`
  padding-top: 139px;
`;

const BackToHome = styled.div``;

const Post = ({ blogData }) => {
  const data = blogData.result;
  console.log(data);
  return (
    <BlogDiv>
      {data.map((d) => (
        <SingleBlog key={d.id} blog={d}></SingleBlog>
      ))}
      <BackToHome>
        <Link href='/'>
          <a>← Back to home</a>
        </Link>
      </BackToHome>
    </BlogDiv>
  );
};

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogsData(params.id);
  return {
    props: {
      blogData,
    },
  };
}

export default Post;
