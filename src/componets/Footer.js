import React from "react";

const Footer = () => {
  const fecha = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>DESING BY :</h5>
            <h6>
              <i className="bi bi-code-square"></i>
              {"  "}José María Asial Diaz
            </h6>

            <h6>
              <i className="bi bi-whatsapp"></i> +54 9 381 580-7972
            </h6>

            <h6>
              <i className="bi bi-envelope"></i> joseasial@alu.frt.unt.edu.ar
            </h6>
            <img
              src="https://static.platzi.com/media/achievements/practico-react-native-formularios-almacenamiento_badge-dac0684a-0303-41fc-b54a-91f9.png"
              alt="dev"
            />
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links Radio Club</h5>
            <ul>
              {/* <li> */}
              <a
                className="grey-text text-lighten-3"
                href="https://es-la.facebook.com/Radioclubtucuman/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                  alt="Facebok"
                  width="50"
                  height="50"
                ></img>{" "}
              </a>
              {/* </li> */}
              {/* <li> */}
              <a
                className="grey-text text-lighten-3"
                href="https://twitter.com/rctlu4kc"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png"
                  alt="Twitter"
                  width="50"
                  height="50"
                ></img>{" "}
              </a>
              {/* </li> */}
              {/* <li> */}
              <a
                className="grey-text text-lighten-3"
                href="https://www.youtube.com/channel/UCePxtbCD-jswFCQFmvsE7yA/featured"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  alt="Youtube"
                  width="50"
                  height="50"
                ></img>{" "}
              </a>
              {/* </li> */}
              {/* <li> */}
              <a
                className="grey-text text-lighten-3"
                href="http://radioclubdetucuman.blogspot.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://w7.pngwing.com/pngs/589/827/png-transparent-blogger-computer-icons-icon-blogger-logo-free-miscellaneous-angle-text-thumbnail.png"
                  alt="Blogspot"
                  width="50"
                  height="50"
                ></img>{" "}
              </a>
              {/* </li> */}
              {/* <li> */}
              <a
                className="grey-text text-lighten-3"
                href="https://logdeargentina.com.ar/wp/?page_id=1081"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://logdeargentina.com.ar/wp/wp-content/uploads/2020/10/cropped-Marca-LdA-con-web-Colores-Circular-1-e1603830899608-1.png"
                  alt="LogdeArgentina"
                  width="60"
                  height="60"
                ></img>{" "}
              </a>
              {/* </li> */}
              {/* <li> */}
              <a
                className="grey-text text-lighten-3"
                href="http://mailhost.tucbbs.com.ar/zimbra/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img1.freepng.es/20180320/hde/kisspng-inbox-by-gmail-computer-icons-ios-email-free-gmail-files-5ab1a52c031422.8510058715215915960126.jpg"
                  alt="email"
                  width="50"
                  height="50"
                ></img>{" "}
              </a>
              {/* </li> */}
              {/* <li> */}
              <a
                className="grey-text text-lighten-3"
                href="https://www.enacom.gob.ar/radioaficionados_p166"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Logo_enacom.png"
                  alt="ENACOM"
                  width="70"
                  height="70"
                ></img>{" "}
              </a>
              {/* </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Todos los derechos reservados © {fecha} Copyright
        </div>
      </div>
    </footer>
  );
};

export default Footer;
