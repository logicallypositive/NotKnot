export default function ErrorMessage({ message }) {
  return (
    <p className="errorMessage">
      <span>❌</span> {message}
    </p>
  );
}
