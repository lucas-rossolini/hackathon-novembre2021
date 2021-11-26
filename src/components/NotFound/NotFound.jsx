import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import img404 from "../../assets/images/404.png";

function NotFound() {
  const history = useNavigate();
  // Redirection au bout de 5secondes sur la page d'accueil
  setTimeout(() => {
    history("/player");
  }, 5000);

  return (
    <div className="div404">
      <div className="flex404">
        <h1 className="title404">4</h1>
        <img className="image404 rotate-scale-up" src={img404} alt="404" />
        <h1 className="title404">4</h1>
      </div>
      <h2 className="title2404">
        Page Introuvable ! <br /> redirection dans 5 secondes
      </h2>
    </div>
  );
}

export default NotFound;
