import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import "animate.css";

const Modals = () => {
  const [isOpenModal, openModal, closeModa] = useModal(false);
  const [isOpenModalContacto, openModalContacto, closeModaContacto] =
    useModal(false);
  const [isOpenModalComisio, openModalComision, closeModaComision] =
    useModal(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="btn waves-effect waves-light #000000 "
        type="submit"
        name="action"
      >
        Acerca
      </button>
      <Modal
        isOpen={isOpenModal}
        closeModal={closeModa}
        // className="animate__animated animate__fadeInDownBig"
      >
        <p className=" p-modal #000000 black">
          <b>
            <h5>Historia:</h5>
          </b>
          <img
            className="animate__animated animate__bounceInLeft"
            src="https://1.bp.blogspot.com/-BXmS0vxEjzM/Yc9Jq-TPvlI/AAAAAAAAEF8/tQdeB2DIj948kejNbO3jsl6VnAk4CPwdACNcBGAsYHQ/s958/Headers%2B100%2Baniv%2Bdiciembre%2B2021.jpg"
            alt="radio"
          />
          <hr />
          <b>
            El Diario El Orden, en su publicación del 28 de octubre de 1.922,
            informa de la nueva entidad fundada con el nombre de Radio Club
            Tucumán, que venía celebrando reuniones en el salón de recepción del
            Colegio lourdista del Sagrado Corazón, motivados por los avances que
            en materia de radiotelefonía se desarrollaban en Buenos Aires. De
            los recortes de una carpeta que el Padre Cazes guardaba con orgullo
            cuya copia obra en la Biblioteca del Radio Club, junto a las reseñas
            entusiastas que recogimos de Ricardo Frías (Queco) ex LU 9 KA,
            podemos rescatar que propio del entusiasmo puesto de manifiesto por
            aquellos experimentadores, va a culminar con el nacimiento del Radio
            Club de Tucumán, cuyo objetivo se fundaba en la instalación de una
            radio difusora local que supliera las irregulares y débiles señales
            que llegaban desde Buenos Aires. La institución se fundó el 27 de
            octubre de 1.922, en el salón de recibos del Colegio del Sagrado
            Corazón, siendo la primera comisión directiva integrada por los
            doctores Ricardo M. Frías y Ricardo Bascary, en la presidencia y
            vicepresidencia respectivamente, Ricardo Frías (Queco) en la
            secretaría, acompañados por los señores Alberto González Acha,
            tesorero y cocales el padre Juan M. Cazes, Enrique Mopty y Luis
            Locatelli. El Radio Club Tucumán, así formado inicia sus primeros
            pasos con más entusiasmo que dinero logrando en poco tiempo estar al
            nivel preponderante entre las radioemisoras del país. Con la visión
            perfecta de la misión que deben desarrollar agrupaciones de esta
            índole inicia su acción en el terreno práctico, para que en lugar de
            tertulias sociales celebrar reuniones científicas con prácticas de
            taller analizando circuitos, probando sus resultados y lo principal
            enseñando a quienes se interesaban de esta floreciente ciencia en
            las enseñanzas del Padre Cazes y las prácticas desplegadas por
            Ricardo Frías(h)
          </b>
        </p>
      </Modal>
      <button
        onClick={openModalContacto}
        className="btn waves-effect waves-light #000000 black"
        type="submit"
        name="action"
      >
        Contacto
      </button>
      <Modal isOpen={isOpenModalContacto} closeModal={closeModaContacto}>
        <p className=" p-modal #000000 black">
          <b>
            <h5>Contacto:</h5>
          </b>

          <img
            className="animate__animated animate__bounceInLeft"
            src="https://1.bp.blogspot.com/-BXmS0vxEjzM/Yc9Jq-TPvlI/AAAAAAAAEF8/tQdeB2DIj948kejNbO3jsl6VnAk4CPwdACNcBGAsYHQ/s958/Headers%2B100%2Baniv%2Bdiciembre%2B2021.jpg"
            alt="radio"
          />
          <h5>Lamadrid 1107 </h5>
          <h5>Teléfono: 54-0381-4247556 </h5>
          <h5>San Miguel de Tucumán</h5>
          <h5>Código Postal: 4000</h5>
          <h5>Tucumán</h5>
          <h5>Argentina</h5>
          <h5>E-mail: lu4kc@tucbbs.com.ar </h5>
        </p>
      </Modal>
      <button
        onClick={openModalComision}
        className="btn waves-effect waves-light #000000 black"
        type="submit"
        name="action"
      >
        Comision Direcctiva
      </button>
      <Modal isOpen={isOpenModalComisio} closeModal={closeModaComision}>
        <p className=" p-modal #000000 black">
          <b>
            <h5>Comisión Directiva:</h5>
          </b>

          <img
            className="animate__animated animate__bounceInLeft"
            src="https://1.bp.blogspot.com/-BXmS0vxEjzM/Yc9Jq-TPvlI/AAAAAAAAEF8/tQdeB2DIj948kejNbO3jsl6VnAk4CPwdACNcBGAsYHQ/s958/Headers%2B100%2Baniv%2Bdiciembre%2B2021.jpg"
            alt="radio"
          />
          <h6>Presidente: Augusto Parra - LU1KCQ </h6>
          <h6>Vice Presidente: Marcelo Mitre - LU5KU</h6>
          <h6>Secretario: Adrián Collante - LU1KWC</h6>
          <h6>Prosecretario: Gerónimo Collante - LU8KGT</h6>
          <h6>Tesorero: Miguel Correnti - LU6KAQ</h6>
          <h6>Protesorero: Roque Albo - LU1kA</h6>
          <h6>
            <b>Vocales Titulares:</b>
          </h6>
          <h6>1° - Daniel Biviano - LU7KHB</h6>
          <h6>2° - Gabriel Funes - LU5KHF</h6>
          <h6>3° - Luis Caneda - LU2KLC</h6>
          <h6>
            <b>Vocales Suplentes:</b>
          </h6>
          <h6>1° - Roberto A. de la Rosa - LU6KA</h6>
          <h6>2° - Carlos Rengel - LU9KDZ</h6>
          <h6>3° - Salvador Medina. - LU5KAH</h6>
          <h6>
            <b>Revisores de Cuentas:</b>
          </h6>
          <h6>Titular: Mario Ismail - LU4KAC</h6>
          <h6>Suplente: Nicolás Misano - LU3KAC (QEPD)</h6>
        </p>
      </Modal>
    </div>
  );
};

export default Modals;
