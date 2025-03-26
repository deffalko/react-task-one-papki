import { render } from "@testing-library/react";

function Papka() {
  const addPapka = () => {
    render(
      <div className="papkaa">
        <a href="#!" class="collection-item">
          <span class="badge" onClick={addPapka}>
            <i class="material-icons">add</i>
          </span>
          <i class="material-icons">email</i>
        </a>
      </div>
    );
  };
  return (
    <div className="papkaa">
      <a href="#!" class="collection-item">
        <span class="badge" onClick={addPapka}>
          <i class="material-icons">add</i>
        </span>
        <i class="material-icons">email</i>
      </a>
    </div>
  );
}
export { Papka };
