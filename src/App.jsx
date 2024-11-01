import React, { useState } from "react";
import "../src/App.css"
import Medal from "./Medal";
import Table from "./Table";

function App() {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);

  // 국가추가 & 금메달 우선 배열
  const handlerAddCountry = (e) => {
    e.preventDefault();

    if (!country || gold === "" || silver === "" || bronze === "") {
      alert("모든 필드를 채워주세요!");
      return;
    }

    const alreadyCountry = countries.map(item => item.country);
    if (alreadyCountry.includes(country)) {
      alert("이미 등록된 국가입니다. 업데이트를 해주세요!");
      return;
    }

    const newCountry = {
      id: new Date().getTime(),
      country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };

    const sortGold = [...countries, newCountry].sort((a, b) => b.gold - a.gold);
    setCountries(sortGold);

    // 입력초기화
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  // 국가 input
  const inputCountry = (e) => {
    setCountry(e.target.value);
  };

  // 메달 개수 update
  const inputGold = (e) => {
    setGold(e.target.value);
  };
  const inputSilver = (e) => {
    setSilver(e.target.value);
  };
  const inputBronze = (e) => {
    setBronze(e.target.value);
  };

  // 나라 삭제
  const handlerDeleteCountry = (id) => {
    const deleteCountry = countries.filter((country) => {
      return country.id !== id;
    });
    setCountries(deleteCountry);
  };

  // 나라업데이트
  const handlerUpdateCountry = (e) => {
    e.preventDefault();

    const nonCountry = countries.some(item => item.country === country);
    if (!nonCountry) {
      alert("존재하지 않는 국가입니다.");
      return;
    };

    const newCountries = countries.map((item) => {
      if (item.country === country) {
        return { country, gold, silver, bronze };
      } else {
        return item;
      }
    });
    
    const sortGold = newCountries.sort((a, b) => b.gold - a.gold);
    setCountries(sortGold);

    // 입력 초기화
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <div>
      <header>
        <img src='/2024년_하계_올림픽_로고.png' alt="Olympics Logo"></img>
        <h2>2024 Paris Olympics</h2>
        <h4>Olympic Medal Tracker</h4>
      </header>

      <form onSubmit={handlerAddCountry}>
        <div>
          <label htmlFor="name">국가명</label>
          <input
            type="text"
            value={country}
            onChange={inputCountry}
            placeholder="국가를 입력하세요"
          />
        </div>
        
        <Medal
        gold={gold}
        silver={silver}
        bronze={bronze}
        inputGold={inputGold}
        inputSilver={inputSilver}
        inputBronze={inputBronze}
        handleAdd={handlerAddCountry}
        handleUpdate={handlerUpdateCountry}/>
      </form>

      <Table countries={countries} handleDelete={handlerDeleteCountry}/>
    </div>
  );
}

export default App;
