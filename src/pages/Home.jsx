import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // 👈 importa esto
import styles from "./modules/home.module.css";

function Home() {
  return (
    <h1>Hola</h1>
    
  );
}

export default Home;