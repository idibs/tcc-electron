import Tabela from '../components/Tabela-est'

export default function HomeEst() {
    return(
        <>
            <h1 className="text-2xl font-bold py-4 text-center">Controle de Estoque</h1>
            <div className="flex w-full justify-center p-4">
            <Tabela 
                data={[
                    {id: 1, nome: 'produto a', quantidade: 10, peso: 25, tipo: "cereal"},
                    {id: 2, nome: 'produto b', quantidade: 5, peso: 12, tipo: "medicamento"},
                    {id: 3, nome: 'produto wtwetwetwetwetwetwtwetwetwtewtwtc', quantidade: 20, peso: 30, tipo: "racao"},
                    {id: 4, nome: 'produto d', quantidade: 15, peso: 18, tipo: "cereal"},
                    {id: 5, nome: 'produto e', quantidade: 8, peso: 22, tipo: "medicamento"},
                    {id: 6, nome: 'produto f', quantidade: 12, peso: 28, tipo: "racao"},
                    {id: 7, nome: 'produto g', quantidade: 7, peso: 16, tipo: "cereal"},
                    {id: 8, nome: 'produto h', quantidade: 18, peso: 24, tipo: "medicamento"},
                    {id: 9, nome: 'produto i', quantidade: 9, peso: 20, tipo: "racao"},
                    {id: 10, nome: 'produto j', quantidade: 14, peso: 26, tipo: "cereal"},
                    {id: 11, nome: 'produto k', quantidade: 11, peso: 19, tipo: "medicamento"},
                    {id: 12, nome: 'produto l', quantidade: 6, peso: 21, tipo: "racao"},
                    {id: 13, nome: 'produto m', quantidade: 13, peso: 27, tipo: "cereal"},
                    {id: 14, nome: 'produto n', quantidade: 16, peso: 23, tipo: "medicamento"},
                    {id: 15, nome: 'produto o', quantidade: 4, peso: 17, tipo: "racao"},
                    {id: 16, nome: 'produto p', quantidade: 17, peso: 29, tipo: "cereal"},
                    {id: 17, nome: 'produto q', quantidade: 3, peso: 15, tipo: "medicamento"},
                    {id: 18, nome: 'produto r', quantidade: 19, peso: 31, tipo: "racao"},
                    {id: 19, nome: 'produto s', quantidade: 2, peso: 14, tipo: "cereal"},
                    {id: 20, nome: 'produto t', quantidade: 21, peso: 32, tipo: "medicamento"}
                ]} 
            />
            </div>
        </>
    )
}