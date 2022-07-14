import "./newUser.css";

export default function NewUser() {
  return (
    <>
    <div className="newUser">
      <h1 className="newUserTitle">Novo Usuario</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nome de usuario</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Nome completo</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Palavra passe</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Telefone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Genero</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="mulher" value="mulher" />
            <label for="mulher">Femenino</label>
            <input type="radio" name="gender" id="female" value="homem" />
            <label for="homem">Mascolino</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Activo</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <button className="newUserButton">Criar</button>
      </form>
    </div>
    </>
  );
}
