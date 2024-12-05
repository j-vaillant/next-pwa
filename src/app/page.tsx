import "./globals.css";
import Quote from "./components/Quote";

const fetchData = async () => {
  const resp = await fetch("https://zenquotes.io/api/today/");
  const json = await resp.json();

  return json;
};

export default async function Home() {
  const data = await fetchData();

  console.log(data, "DATA");

  return <Quote quote={data[0]} />;
}
