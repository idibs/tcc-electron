import Tabela1 from '../tables/Tabela-1'

export default function HomeEst() {
    return(
        <div className='p-4'>
            <h1 className="text-2xl font-bold py-4 text-center">Controle de Estoque</h1>
            <div className='grid grid-cols-6 gap-4 mt-5'>
                <div className='col-span-1'>
                    <div className='flex flex-col justify-center mt-5'>
                        <button className='bg-amber-500'>Tabela 1</button>
                        <h1 className="py-4 text-center">Tabela 2</h1>
                        <h1 className="py-4 text-center">Tabela 3</h1>
                    </div>
                </div>   
                <div className='col-span-5'>
                    <Tabela1 />
                </div>
            </div >
        </div>
    )
}