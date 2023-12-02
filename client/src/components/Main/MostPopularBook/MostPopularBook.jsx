export default function MostPopularBook() {
  return (
    <div className="item">
      <img src="/Silver grains_Pori.jpg" className="testSnimka" alt="" />
      <h4 className="centerItInBox">
        Fortnite
        <br />
        <span>Sandbox</span>
      </h4>
      <ul className="centerItInBox">
        <li>
          <i className="fa fa-star" /> 4.8
        </li>
        <li>
          <i className="fa fa-download" /> 2.3M
        </li>
      </ul>
    </div>
  );
}
