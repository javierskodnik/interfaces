import React from 'react';
import './main.css';

const Header = () => {
    return (
        <div class="px-3 py-2 bg-dark text-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <a href="#" class="nav-link text-secondary">
                                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home"></use></svg>
                                Cotización de Monedas
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white">
                                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use href="#speedometer2"></use></svg>
                                Mercado
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white">
                                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use href="#table"></use></svg>
                                Inversiones
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )        
}
export default Header;