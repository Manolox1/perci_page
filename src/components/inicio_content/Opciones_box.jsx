import "../styles/Opciones_box.css"

const Opciones_box = () => {
    return (
        <div>
            <div className="opciones">
                <div className="caja">
                    <img src="" alt="" />
                </div>
                <div className="caja">
                    <div className="texto">
                        <h1>Plato <br />sugerido</h1>
                        <p>Una opción más que se suma a todos los platos que ofrece nuestro menú. Enterate de los platos sugeridos de cada día en las stories de nuestras redes sociales!</p>
                        <p>Más info en nuestro <a href="https://www.instagram.com/percipilar/"> Instagram</a></p>
                    </div>
                </div>
                <div className="caja">
                    <img src="" alt="" />
                </div>
                <div className="caja">
                    <div className="texto">
                        <h1>VIANDAS</h1>
                        <p>Para empresas, oficinas y particulares, Perci ofrece el servicio de Viandas para poder organizar las comidas del mes con anticipación y tener la seguridad de disfrutar cada día un plato elaborado. Presupuestos armados a medida, de acuerdo a la cantidad de personas.</p>
                        <p>Por consultas y presupuestos <a href="">hola@gmail.com</a></p>
                    </div>
                </div>
                <div className="caja">
                    <img src="" alt="" />
                </div>
                <div className="caja">
                    <div className="texto">
                        <h1>EVENTOS <br />AWAY</h1>
                        <ol>
                            <li>DEFINÍS cantidad de comensales.</li>
                            <li>ELEGÍS si querés ternera braseada sóla o lo combinás con picada, empanadas, pastelería y/o bebida.</li>
                            <li>PEDÍS con un mínimo de 48 horas de anticipación.</li>
                            <li>RETIRÁS todo tu pedido por Perci!</li>
                        </ol>
                    </div>
                </div>
                <div className="caja">
                    <img src="" alt="" />
                </div>
                <div className="caja">
                    <div className="texto">
                        <h1>DESAYUNOS,  ALMUERZOS, MERIENDAS Y CENAS!</h1>
                    </div>
                </div>
                <div className="caja">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="mapa-nosotros">
                <div className="caja-mapa">
                    <h1>Donde <br /> Estamos?</h1>
                    <p>Tratado del Pilar y colectora Oeste de Panamericana Ramal Pilar.</p>
                    <div className="mapa"></div>
                </div>
                <div className="caja-mapa">
                    <h1>NUESTROS <br />CONTACTOS</h1>
                    <p><a href="">hola.perci@gmail.com</a></p>
                    <div className="wsp">
                        <p>11 0000-0000</p>
                    </div>
                    <div className="instagram">
                        <p>@Percipilar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opciones_box