export default function Step({ stepObj }) {
  return (
    <div className="step">
      <p>{stepObj.description}</p>
      <img
        src={stepObj.photoName}
        className="crochetImage"
        alt={stepObj.description}
      />
    </div>
  );
}
