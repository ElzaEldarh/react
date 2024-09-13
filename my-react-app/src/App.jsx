import porfumImg from "./assets/1.jpg";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Парфюмерная вода Sergio Nero Vanilla CHOCO </h1>
      <h2 className="title2">edt 50 ml</h2>
      <img className="porfume" src={porfumImg}></img>
      <h3 className="title3">Описание</h3>
      <p className="description">
        Парфюмерная композиция Vanilla Choco «Ванильный шоколад» от Sergio Nero
        проявляется в изысканной ноте ванильного шоколада с добавлением
        пряностей.<br></br> Дополнительный благородный смолистый аромат сандала
        делает композицию еще ярче.
      </p>
      <ul className="bulleted list">
        <li>Вес: 214 г</li>
        <li>Количество упаковок: 1 шт</li>
        <li>Верхние ноты: белый мускус, шоколад</li>
        <li>Средние ноты: ваниль, корица, роза</li>
        <li>Базовые ноты: амбра, мирра, пряные ноты, сандаловое дерево</li>
      </ul>
    </div>
  );
};

export default App;
