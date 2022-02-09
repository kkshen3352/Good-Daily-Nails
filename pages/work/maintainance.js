import Link from "next/link";
import styles from "/styles/Home.module.css";
import Addjson from "../../JSON/nav.json";
// JSON 測試
export default function Maintainance() {
    // const {data} =
    // console.log(Addjson['nav'])
    return (
        <>
            <h1>maintainance{Addjson.nav.Josh.age}</h1>
            <h1>maintainance{Addjson.map}</h1>
        </>
    );
}
