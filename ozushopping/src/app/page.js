import Image from "next/image";
import styles from "./page.module.css";
import Hello from "./components/Hello";
import {data} from "./components/data"
import Catalog from "./components/Catalog";

export default function Home() {
  const name="Kerem";
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.
          </li>
          <li>
            <Hello myName={name}/>
            <Catalog products={data} />
          </li>
        </ol>

        
      </main>
      
    </div>
  );
}
