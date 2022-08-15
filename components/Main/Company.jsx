import React from "react";

import styles from "./Rating.module.scss";

export default function User({ company = {}, id = 0 }) {
  return (
    <li>
      <div className={styles.num}>{id}</div>
      <div className={styles.userData}>
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAlCAMAAABPoYZEAAAAkFBMVEX///8AsnTvPUIArGcArWoAsHDJ6truKjHuMDb60NHvOT7f8+rZ7uN2yqPM6dv6zM3uIyr++fr96Oj3q6yFz6wftXv73Nz2oaPxW1+24MqQ07T1mZv5xsfp9u/x+vY/u4b+8vLxZ2rtFh9jxpsAp1ud17tWwZHzf4LycHOs3cXwSk75v8DtAATtABHwT1T3srNuTKXQAAACiUlEQVRYhe2X2ZbiIBCGIUBA4oJLYhKdGBNtW7tt3//tpgqyjcs5c4U3/V8IRdQPaqGUkF/51vhN3EnxHm5ev4d7PPx5C3fCV2/hCrF7BzbjlJLSO7YQlMaErH1zPwQVEN994he7Ai8zyOdT6hWbM0p5DpPPyueBEeuyWaqNP+wZsRRnW6k/vWHHiI3t7XzRHrkxBVnsRgX+/HyGVOb2av4yQVAtfHF3UEEhTkaAVSdfWMKomLRYreceuRyDmwA2MN68DH4W2PBLpQE78oclR3aE1xSxs2ZpYXQns8WnSmub6UvZPVB7aNmCH91HYsEiMmWiE1xDA2sg1kAKlrlUtgTH/TZGgtsDacwVVrewD0j1EvpVZYyCB9qYKiUTaGJ8Z0swpsiF0qCcWcUYwc4CCSxXGA/dgWHLPzqQy84F8yRJtgBWN5iUeJ2kF5frJSxAlQcaxsRyqeDZkMvDsZPlijxqzAjfHEf2QaOczKtA7/91/wI8IF28b9Ika4AZ1zOWyLV5b7lwiHrAZf2vNGw2WWetXIcfqEDIfSpbrgu40imZw/GbrSFXtdwdulbQaNf52W2lcFy6q+v6I3vOBcdWD/dyz10r3BPSXL4PuTzM8NuB3McXdWi5Agx2fsUlP/LrFbeU+rLebGxULw/cjERx4+0mvtkU1fhZ1Dlo+pJ7u973+457UloZyG9MY7u7Oy4hNRtwWf+3A+N77qynXKLur4yWC7W8X6OWWD7BMy5cAT23kYj/jzu63XO/pbwCNzXXsvFJJWW1wRqW0lhuzZjL1zFl/BCR8MBbMUEIWOzYc5ldfADf2fPZaDQr7dAuwRSNhRsQF4ZN1RRhGBb2tRXEFIe+qiK3+CuP+gu6Riq3kUP3mAAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <div className={styles.name}>{company ? company.name : "none"}</div>
      </div>
    </li>
  );
}
