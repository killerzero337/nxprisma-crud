import Form from "@/components/Form2"
import { newProveedor } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo artículo</h3>
        <Form action={newProveedor} title='Crear proveedor' articulo={null}  />
    </div>
  )
}

export default page