import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Erro ao coletar a API");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h2>Lista de Usuarios</h2>

      {users.length === 0 ? (
        <p className="loading">Carregando</p>
      ) : (
        users.map((u) => (
          <div className="user-card" key={u.id}>
            {u.id} <strong>{u.name}</strong> {u.email}
          </div>
        ))
      )}
    </div>
  );
}
