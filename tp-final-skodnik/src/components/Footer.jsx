import React from 'react';


const Footer = (props) => {
    
return (
<div>
    <footer class="py-5">
        <div class="row">
            <div class="col-2">
                <h5>Mi Cuenta</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Mi Perfil</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Mis Compras</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Mis Reclamos</a></li>
                </ul>
            </div>

            <div class="col-2">
                <h5>Somos TiendaOnline</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Preguntas Frecuentes</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Trabajá con Nosotros</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Promociones Vigentes</a></li>
                </ul>
            </div>

            <div class="col-2">
                <h5>Canales de Atención</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Llamanos</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contactanos por Mail</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Acercate a Nuestra Oficina</a></li>
                </ul>
            </div>

            <div class="col-4 offset-1">
                <form>
                    <h5>Ofertas exclusivas en tu email</h5>
                    <p>Queres recibir nuestras promociones antes que nadie?...dejanos tu email</p>
                    <div class="d-flex w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                    <button class="btn btn-primary" type="button">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
            </ul>
        </div>
    </footer>      
</div>
);
}
 
export default Footer;