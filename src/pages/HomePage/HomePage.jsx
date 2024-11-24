import { useEffect, useState } from "react";
import { getManufacturers } from "../../../autodata-api.js";

import css from "./HomePage.module.css";

export default function HomePage() {
  const [manufacturers, setManufacturers] = useState([]);

  const fetchAllManufacturers = async () => {
    try {
      const data = await getManufacturers();
      setManufacturers(data.data);
      console.log("Manufacturers:", data);
    } catch (error) {
      console.error("Error fetching Autodata:", error);
    }
  };

  //   useEffect(() => {
  //     fetchAllManufacturers();
  //   }, []);

  return (
    <div className={css.pageContainer}>
      <h1>All Auto Manufacturers</h1>
      <button className={css.allManufacturersBtn} onClick={fetchAllManufacturers}>
        Get Manufacturers
      </button>
      {manufacturers.length > 0 && (
        <ul className={css.manufacturersList}>
          {manufacturers.map((item) => (
            <li className={css.manufacturerItem} key={item.manufacturer_id}>
              {item.manufacturer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
