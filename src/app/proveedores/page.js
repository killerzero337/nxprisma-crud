import Link from 'next/link'
import Articulo from '@/components/Proveedor'
import { getProveedor } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const proveedor = await getProveedor()
    // console.log(articulos);

    return (
        <div>
            <Link className='enlace' href="/proveedores/new"> Nuevo Proveedor </Link>
            {
                proveedor.map((proveedor) => (
                    <Articulo key={proveedor.id} proveedor={proveedor} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/edit', query: { id: proveedor.id } }}>
                            Editar artículo
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/delete', query: { id: proveedor.id } }}>
                            Eliminar artículo
                        </Link>
                    </Articulo>
                ))
            }
        </div>
    )
}
