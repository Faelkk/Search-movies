import imgError from "../../assets/404 Error-bro.svg";
const ErrorCard = () => {
  return (
    <div>
      <img src={imgError} alt="Erro na requisição" />
    </div>
  );
};

export default ErrorCard;
