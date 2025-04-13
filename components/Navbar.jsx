import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <a
                href="https://cronometro-reactjs.vercel.app/" target='_blank'
            > <span class="link-icon"><img className='nav-icon'  src="chronometer-100.png" alt="" width={15}/> </span>Cronômetro
            </a>

            <a
                href="https://consultaporcep.vercel.app/"
                target="_blank"
            > <span class="link-icon"><img className='nav-icon' src="location.png" alt="" width={15}/> </span>Busca Cep
            </a>

            <a
                href="https://climagora.vercel.app/"
                target="_blank"
            > <span class="link-icon"><img className='nav-icon' src="weather.png" alt="" width={15}/> </span>Clima Agora
            </a>

            <a
                href="https://numerosaleatorios-react.vercel.app/"
                target="_blank"
            > <span class="link-icon"><img className='nav-icon' src="sort-64.png" alt="" width={15}/> </span>Números aleatórios
            </a>
        </nav>
    )
}

export default Navbar