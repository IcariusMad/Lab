//! Importación de componente
import { Button } from "./components/Button/Button";

//! Objeto de estilos en Javascript
const styles = {
  button: { color: "red", border: 0, backgroundColor: "brown" },
  h1: { color: "green" },
};

//! Variable que permitirá renderizado condicional
const day = "MARTES";

export default function App() {
  return (
    <>
      <Button />
      <h1 style={styles.h1}>
        Hola mundo <Button />
      </h1>
      {[0, 1, 2, 3, 4, 5].map(() => (
        <Button />
      ))}
      <Button />
      {day === "MARTES" ? (
        <button
          style={{
            backgroundColor: "red",
            borderRadius: 5,
            color: "white",
          }}
        >
          MARTES
        </button>
      ) : (
        <button>MIERCOLES</button>
      )}
    </>
  );
}
