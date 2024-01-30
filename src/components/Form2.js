import Button from "@/components/Button";

function Form({ action, title, proveedor, disabled = false }) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={proveedor?.id} />
      <fieldset disabled={disabled}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          defaultValue={proveedor?.nombre}
          autoFocus
        ></input>
        <div>
          {proveedor?.nacional ? (
            <input
              type="checkbox"
              id="nacional"
              name="nacional"
              defaultChecked
            ></input>
          ) : (
            <input type="checkbox" id="nacional" name="nacional"></input>
          )}
          <label htmlFor="nacional">Nacional</label>
        </div>
      </fieldset>
      <Button title={title} />
    </form>
  );
}

export default Form;
