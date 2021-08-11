import { Component } from 'react';

export default class Store extends Component {
    render(){
        return(
            <div className="storePosition">
                <div className="containerOfTheStore">
                    <h1 className="titleMain-store">Bienvenido A La Tienda New World</h1>
                    <div className="articles">
                        <span className="article articleActive" id="shoeButton">Zapatos</span>
                        <span className="article" id="shirtButton">Camisas</span>
                        <span className="article" id="makeupButton">Maquillaje</span>
                    </div>
                    <div className="store">
                        <div className="shoesStore">
                            <div className="backgroundShoes">
                                <div className="backgroundShoesGradients">
                                    <div className="backgroundShoesGradient firstGradient" color="blue"></div>
                                    <div className="backgroundShoesGradient" color="red"></div>
                                    <div className="backgroundShoesGradient" color="green"></div>
                                    <div className="backgroundShoesGradient" color="orange"></div>
                                    <div className="backgroundShoesGradient" color="black"></div>
                                </div>
                                
                                <h1 className="nike">Nike</h1>
                                <img src="./img/store/shoes/logo.png" alt="logo" className="logo"/>
                                <button className="share active-share"><i className="fas fa-share-alt"></i></button>
                                
                                <img src="./img/store/shoes/shoesBlue.png" className="shoes showShoes" alt="shoesBlue" color="blue"/>
                                <img src="./img/store/shoes/shoesRed.png" className="shoes" alt="shoesRed" color="red"/>
                                <img src="./img/store/shoes/shoesGreen.png" className="shoes" alt="shoesGreen" color="green"/>
                                <img src="./img/store/shoes/shoesOrange.png" className="shoes" alt="shoesOrange" color="orange"/>
                                <img src="./img/store/shoes/shoesBlack.png" className="shoes" alt="shoesBlack"color="black"/>
                            </div>
                            <div className="shoesInfo">
                                <div className="shoesName">
                                    <div className="mainTitle">
                                        <h1 className="shoesTitle">Nike Zoom KD 12</h1>
                                        <span className="new">New</span>
                                    </div>
                                    <h3 className="descriptionSmall">NIKE CORRE CON GANAS</h3>
                                    <div className="shoesDescription">
                                        <h3 className="descriptionShoesTitle">Con Los Mejores Zapatos</h3>
                                        <p className="textShoes">
                                            El calzado KD12 fue creado para su dominio y energía ilimitada 
                                            durante todo el partido con la última innovación en Nike Air Zoom.
                                        </p>
                                    </div>
                                    <div className="container-color">
                                        <h3 className="title-color">Colores Disponibles</h3>
                                        <div className="colors">
                                            <span className="color activeColor" primary="#2175f5" color="blue"></span>
                                            <span className="color" primary="#f84848" color="red"></span>
                                            <span className="color" primary="#29b864" color="green"></span>
                                            <span className="color" primary="#ff5521" color="orange"></span>
                                            <span className="color" primary="#444" color="black"></span>
                                        </div>
                                    </div>
                                    <div className="container-size">
                                        <h3 className="sizeTitle">Tallas</h3>
                                        <div className="sizes">
                                            <span className="size">34</span>
                                            <span className="size">36</span>
                                            <span className="size activeSize">38</span>
                                            <span className="size">39</span>
                                            <span className="size">40</span>
                                        </div>
                                    </div>
                                    <div className="buy-price">
                                        <button className="buy"><i className="fas fa-shopping-cart"></i> Agregar Al Carrito</button>
                                        <div className="price">
                                            <i className="fas fa-dollar-sign"></i>
                                            <h1>39.99</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shirtsStore">
                            <div className="backgroundShirt">
                                <div className="backgroundShirtGradients">
                                    <div className="backgroundShirtGradient firstGradient" color="white"></div>
                                    <div className="backgroundShirtGradient" color="black"></div>
                                </div>

                                <h1 className="mockup">MOCKUP</h1>
                                <button className="share active-share"><i className="fas fa-share-alt"></i></button>
                            
                                <img src="./img/store/shirt/whiteShirt.png" alt="whiteShirt" className="shirt showShirt" color="white"/>
                                <img src="./img/store/shirt/blackShirt.png" alt="blackShirt" className="shirt" color="black"/>
                            </div>
                            <div className="shirtInfo">
                                <div className="shirtName">
                                    <div className="shirtMainTitle">
                                        <h1 className="shirtTitle">MOCKUP</h1>
                                        <span className="new">New</span>
                                    </div>
                                    <h3 className="descriptionSmallForTheShirt">CAMISAS PARA TODA LA VIDA</h3>
                                    <div className="shirtDescription">
                                        <h3 className="descriptionShirtTitle">Utiliza Camisas De Moda</h3>
                                        <p className="textShirt">
                                            Las Camisas Mockup Fueron Diseñadas Para Todos Sus Usos, Desde Ir
                                            A Trotar Hasta Ir A La Playa Con Un Aguante Impresionante.
                                        </p>
                                    </div>
                                    <div className="container-color-shirt">
                                        <h3 className="title-color-shirt">Colores Disponibles</h3>
                                        <div className="colors-shirts">
                                            <span className="colorShirt activeColor" primary="#888" color="white"></span>
                                            <span className="colorShirt" primary="#333" color="black"></span>
                                        </div>
                                    </div>
                                    <div className="container-size-shirt">
                                        <h3 className="shirtSizeTitle">Tallas</h3>
                                        <div className="sizes-shirts">
                                            <span className="sizeShirt">L</span>
                                            <span className="sizeShirt">M</span>
                                            <span className="sizeShirt activeSize">S</span>
                                        </div>
                                    </div>
                                    <div className="buy-price">
                                        <button className="buy"><i className="fas fa-shopping-cart"></i> Agregar Al Carrito</button>
                                        <div className="price">
                                            <i className="fas fa-dollar-sign"></i>
                                            <h1>6.99</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="makeupStore">
                            <div className="backgroundMakeup">
                                <button className="share active-share"><i className="fas fa-share-alt"></i></button>
                                
                                <img src="./img/store/makeup/makeup.jpg" className="makeup" alt="makeup"/>
                            </div>
                            <div className="makeupInfo">
                                <div className="makeupName">
                                    <div className="makeupMainTitle">
                                        <h1 className="makeupTitle">MAQUILLAJE</h1>
                                        <span className="new">New</span>
                                    </div>
                                    <h3 className="descriptionSmallForTheMakeup">M.A.C</h3>
                                    <div className="makeupDescription">
                                        <h3 className="descriptionMakeupTitle">MEJORES MARCAS</h3>
                                        <p className="textMakeup">
                                        Una marca de maquillaje profesional que marca tendencia detrás de escena en semanas de la moda de todo el mundo.
                                        </p>
                                    </div>
                                    <div className="container-color-makeup">
                                        <h3 className="title-color-makeup">Colores Disponibles</h3>
                                        <div className="colors-makeup">
                                            <span className="colorMakeup activeColor" primary="#777" color="white"></span>
                                            <span className="colorMakeup" primary="#2175f5" color="blue"></span>
                                            <span className="colorMakeup" primary="#f84848" color="red"></span>
                                            <span className="colorMakeup" primary="#29b864" color="green"></span>
                                            <span className="colorMakeup" primary="#ff5521" color="orange"></span>
                                            <span className="colorMakeup" primary="#444" color="black"></span>
                                            <span className="colorMakeup" primary="#ffff00" color="yellow"></span>
                                            <span className="colorMakeup" primary="#8800ff" color="purple"></span>
                                            <span className="colorMakeup" primary="#7e4c00" color="browm"></span>
                                        </div>
                                    </div>
                                    <div className="buy-price">
                                        <button className="buy"><i className="fas fa-shopping-cart"></i> Agregar Al Carrito</button>
                                        <div className="price">
                                            <i className="fas fa-dollar-sign"></i>
                                            <h1>5.99</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="storeDescriptionContainer">
                        <div>
                            <h1>Crea Tu Tienda Virtual</h1>
                            <p>
                                Si Quieres Crear Tu Propio Negocio Online Somos
                                La Mejor Opcion Para Ti, Creamos Tiendas De: Ropa, Accesorios, Articulos
                                De Belleza, Videojuegos, Equipo De Produccion, Instrumentos,
                                Y Todo Lo Que Se Pueda Imaginar, Con Opciones De Carrito De
                                Pago, Opciones De Cambio De Color, Metodo De Contacto, Variedad
                                De Pasarelas De Pago, Y Muchas Cosas Mas, Para Que Su Tienda
                                Pueda Tener Exito Y Pueda Ser, Sencillo, Funcional Y Rapido.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};