import Head from "next/head";

const Title: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Head>
      <title>{message}</title>
    </Head>
  );
};

export default Title;
