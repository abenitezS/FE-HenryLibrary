import React from "react";
import styles from "./PoliticaPrivacidad.module.css";
import NavBar from "../../NavBar/NavBar.jsx";
import NavBar2 from "../../NavBar2/NavBar2.jsx";
import Footer from "../../Footer/Footer.jsx";

import { BsArrowUpCircle } from "react-icons/bs";

export default function PoliticaPrivacidad() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div className={styles.PoliticaPrivacidad}>
      <NavBar />
      <NavBar2 />

      <div className={styles.titulo}>
        <h3 className={styles.tituloH3}>
          La protección de la privacidad y de los datos personales es una
          prioridad para la Compañía y un claro compromiso asumido por la
          Compañía. Esta política se refiere a las prácticas de privacidad del
          sitio web LIVRARIA LELLO administrado por la Compañía. Los datos
          personales facilitados por los USUARIOS REGISTRADOS serán tratados con
          las garantías de seguridad y confidencialidad exigidas por la
          legislación en materia de protección de datos de carácter personal.
        </h3>
        <h3 className={styles.tituloH3}>
          La compañía respeta su derecho a la privacidad y no recopila ninguna
          información personal sobre USUARIOS REGISTRADOS sin su solicitud o
          consentimiento explícito. Esta Política tiene como objetivo informar y
          explicar los siguientes puntos: Información que puede ser recabada y
          uso de los datos personales Los datos personales se solicitan cuando
          usted se registra como USUARIO REGISTRADO en LIBRERIA HENRY para
          acceder a los PRODUCTOS Y SERVICIOS que brinda la Empresa mediante la
          creación de una cuenta personal con usuario y contraseña. Dichos datos
          también se solicitan en caso de pedido y compra de PRODUCTOS, y
          también a efectos de la entrega, por parte de la empresa, de
          PRODUCTOS.
        </h3>

        <h3 className={styles.tituloH3}>
          Con carácter general, las categorías de datos de carácter personal que
          podrán ser recabados, previa autorización del USUARIO REGISTRADO, y
          que son objeto de tratamiento por parte de la Sociedad para las
          finalidades antes indicadas son las siguientes: Nombre; Fecha de
          cumpleaños; género; denominación social; Código postal; correo
          electrónico; contacto telefónico; NIF (número de identificación
          fiscal).
        </h3>

        <h3 className={styles.tituloH3}> 
          La Empresa también podrá utilizar los datos personales para mantener
          la calidad de los servicios prestados y obtener estadísticas generales
          sobre el uso del sitio web de LIBRERIA HENRY. Para ello, la Compañía
          combina los datos recopilados automáticamente con datos personales,
          como el nombre y la dirección de correo electrónico. La Empresa
          utilizará los datos personales del USUARIO REGISTRADO en el marco de
          la actividad desarrollada a través del sitio web de LIBRERIA HENRY, en
          particular, para: Configurar la cuenta de USUARIO REGISTRADO Prestar,
          ejecutar y mantener servicios, tales como la suscripción a la
          Newsletter de la empresa por parte de los USUARIOS REGISTRADOS, la
          visita virtual al espacio LIBRERIA HENRY, su participación en
          concursos y otras iniciativas promovidas por la Empresa Procesar y
          completar transacciones (el pedido y adquisición electrónica de
          PRODUCTOS Y SERVICIOS LELLO divulgados y puestos a disposición a
          través del sitio web de LIBRERIA HENRY, y su venta y entrega por parte
          de la Compañía a CLIENTES), así como para enviar información
          relacionada, incluidas confirmaciones de transacciones, facturas para
          la compra de servicios, boletos de acceso al espacio físico de
          LIBRERIA HENRY Gestionar la adquisición de PRODUCTOS y SERVICIOS por
          parte de los CLIENTES y la información sobre su historial de
          transacciones que se encuentra disponible en el área reservada
          respectiva Responder a las solicitudes de información o reclamaciones
          de los USUARIOS REGISTRADOS.
        </h3>

        <h3 className={styles.tituloH3}>
          Responsabilidad del tratamiento de datos La Empresa como controlador
          de datos: garantiza que el procesamiento de datos personales se lleve
          a cabo únicamente en el ámbito de los fines para los que fueron
          recopilados o para fines compatibles con aquellos; Recopila, utiliza y
          conserva únicamente los datos personales mínimos, necesarios y
          suficientes para los fines de que se trate; No utiliza datos
          personales para enviar correo no solicitado cuyo contenido no haya
          sido recibido sin consentimiento explícito No transmite ningún dato
          personal con fines comerciales o publicitarios; Trata datos personales
          para las finalidades legalmente previstas o para la realización de
          servicios y venta online bajo demanda. seguridad de datos personales
        </h3>

        <h3 className={styles.tituloH3}>
          La Empresa, en el desarrollo de sus actividades, utiliza un conjunto
          de tecnologías y procedimientos de seguridad adecuados para la
          protección de sus datos personales, salvaguardando el acceso y la
          divulgación no autorizados, a saber: Medidas de seguridad física, a
          saber, el control de acceso de empleados, colaboradores y visitantes a
          las instalaciones de la sede y a las instalaciones de los centros de
          datos y de cómputo, mecanismos muy restringidos de lucha contra la
          intrusión, extinción de incendios, equipos de vigilancia 24x7 y
          alojamiento de los equipos en espacios dedicados ubicaciones; Medidas
          de seguridad lógica, en el componente de acceso a sistemas y
          estaciones de trabajo a través de mecanismos de gestión de identidad,
          autenticación y privilegios; en el componente de red, el uso de
          firewalls y sistemas de detección de intrusos, segregación de redes
          (interna, externa, zona desmilitarizada) y ambientes de aplicación,
          así como la encriptación de la información a través de canales seguros
          de comunicación. seguridad de datos personales En los términos del
          Reglamento General de Protección de Datos (en adelante, RGPD)
          actualmente en vigor, como titular de datos personales y en relación
          con los datos objeto de tratamiento por parte de la Empresa, el
          USUARIO REGISTRADO tiene los siguientes derechos que puede ejercer en
          virtud del RGPD y demás legislación aplicable: El derecho de acceso a
          sus datos personales, El derecho a rectificar sus datos personales, El
          derecho a borrar sus datos personales, El derecho a limitar el
          procesamiento de sus datos personales, El derecho a la portabilidad de
          los datos personales proporcionados por usted, El derecho a oponerse a
          cierto procesamiento de datos personales que le conciernen, Derecho a
          no ser objeto de ninguna decisión tomada únicamente sobre la base del
          tratamiento automatizado.
        </h3>

        <h3 className={styles.tituloH3}>
          La Empresa realizará los esfuerzos necesarios, en los términos de la
          legislación aplicable, para proporcionar, rectificar o suprimir los
          datos personales que haya tratado. Para ejercer los derechos antes
          mencionados, el USUARIO REGISTRADO, como titular de los datos
          personales en cuestión, puede contactar a la Compañía en la siguiente
          dirección de correo electrónico (clientes@llibreriahenry.com) . Si
          dichas solicitudes son manifiestamente infundadas o excesivas, en
          particular debido a su carácter repetitivo, la Empresa podrá exigir al
          titular de los datos personales el pago de una tarifa razonable que
          tendrá en cuenta los costes administrativos de proporcionar la
          información o comunicación, o de adoptar las medidas solicitadas, o
          negarse a dar curso a la solicitud. Cuando el tratamiento se base en
          el consentimiento del USUARIO REGISTRADO, usted tiene este derecho a
          retirar su consentimiento, en cualquier momento, sin comprometer la
          licitud del tratamiento ya dado por la Empresa a los datos personales
          en base al consentimiento previamente otorgado.
        </h3>

        <h3 className={styles.tituloH3}>
          El USUARIO REGISTRADO tiene, en todo caso, el derecho a presentar una
          reclamación ante una autoridad de control. Para los efectos de
          utilizar el SITIO DE LIBRERIA HENRY, el USUARIO REGISTRADO se
          compromete a proporcionar y mantener todos sus datos personales
          actualizados y veraces. A su vez, la Empresa les garantiza la
          posibilidad de rectificar y actualizar sus datos, preferentemente a
          través de su “Cuenta Personal”, o utilizando los medios antes
          mencionados. archivo de datos personales Los datos personales de los
          USUARIOS REGISTRADOS son conservados por la Empresa en servidores
          ubicados en la Unión Europea. Estos servidores están protegidos y
          mantenidos respetando los más altos niveles de seguridad y la
          legislación de privacidad aplicable. Los datos sólo se conservarán
          durante el plazo estrictamente necesario para el tratamiento y de
          acuerdo con la finalidad de que se trate. La Empresa conservará los
          datos personales mientras el registro del USUARIO REGISTRADO esté
          activo o sea necesario para la actividad correspondiente, es decir,
          para poner a disposición los PRODUCTOS y prestar los SERVICIOS
          contratados, sin perjuicio, no obstante, de cualquier obligación
          derivada de la ley. e impone la retención de datos personales más allá
          de esos períodos de retención.
        </h3>

        <h3 className={styles.tituloH3}>
          Si el USUARIO REGISTRADO cierra su cuenta, los datos personales
          asociados a la misma serán eliminados sin demora indebida. Cesión de
          datos personales a terceros La prestación de servicios por parte de la
          Empresa a través del sitio web de LIBRERIA HENRY supondrá la
          utilización de servicios de terceros subcontratados, lo que implica el
          acceso por parte de estos terceros a los datos personales del USUARIO
          REGISTRADO. En concreto, la tramitación de los pagos realizados por
          ________ es responsabilidad de la empresa __________, entidad
          registrada en el Banco de Portugal con el número _______, con NIPC/NIF
          __________ y ​​domicilio social _____________________. El transporte y
          entrega de los PRODUCTOS comprados electrónicamente es responsabilidad
          de la empresa ______________ con domicilio en ____________________ y
          ​​NIPC/NIF __________. La Sociedad sólo utiliza entidades
          subcontratadas que presenten las garantías suficientes para llevar a
          cabo las medidas técnicas y organizativas necesarias para cumplir con
          los requisitos de la legislación aplicable con el nivel de seguridad
          adecuado a los datos de que se trate, y las garantías y obligaciones
          del subcontratista se formalizarán entre la Compañía y cada uno de
          estos terceros. En todo caso, únicamente se facilitarán a dichas
          entidades los datos personales estrictamente necesarios para los fines
          de que se trate. Con carácter general, la Empresa sólo divulgará datos
          personales cuando dicha divulgación sea requerida o permitida por ley
          o en cumplimiento de una orden de una autoridad judicial,
          administrativa u otra autoridad competente en los términos de la
          legislación vigente. Cookies y tecnologías similares Una cookie es un
          pequeño archivo de información que se instala en el navegador del
          USUARIO y se almacena en la computadora o plataforma móvil del USUARIO
          cuando visita un sitio electrónico.
        </h3>

        <h3 className={styles.tituloH3}>
          La Empresa utiliza cookies en su sitio web para mejorar el rendimiento
          y la experiencia de navegación de sus USUARIOS, aumentando, por un
          lado, la rapidez y eficacia de la respuesta y, por otro lado,
          eliminando la necesidad de introducir repetidamente la misma
          información. La colocación de cookies no sólo ayuda a los sitios
          electrónicos a reconocer el dispositivo del USUARIO en su próxima
          visita, sino que también facilita su correcto funcionamiento. Las
          cookies utilizadas en el sitio web de LIBRERIA HENRY son las
          siguientes: Cookies de personalización: nos permiten reconocer las
          preferencias del USUARIO, para que en próximas visitas no tenga que
          volver a seleccionar las mismas opciones, facilitándole así la
          navegación. Cookies de análisis: permiten recopilar información para
          el análisis estadístico de la navegación y uso del sitio web de
          LIBRERIA HENRY, permitiéndonos conocer cómo navegan los USUARIOS y
          encontrar formas de mejorar su experiencia y las características del
          sitio web. La Empresa utiliza Google Analytics, uno de los servicios
          estadísticos más utilizados y confiables. La información recopilada,
          como las páginas visitadas o el tiempo dedicado a cada una, no permite
          identificar usuarios específicos ya que las visitas son anónimas. Los
          metadatos generados por el uso de cookies pueden ser enviados a
          terceros para análisis de tendencias, seguimiento de la navegación de
          los USUARIOS, registrados o no, en el sitio y su desempeño, sin
          embargo, sin identificar a ninguna persona. ¿Cómo controlar el uso de
          Cookies? El USUARIO puede impedir el uso de cookies en la
          configuración de su navegador. No obstante, la limitación de esta
          opción al uso de determinados recursos o al funcionamiento de
          determinadas herramientas puede estar condicionada. Descargo de
          responsabilidad La Empresa no se hace responsable de los daños
          (incluidos, en particular, el daño emergente, el lucro cesante o el
          daño moral) que se deriven, directa o indirectamente, de la correcta o
          incorrecta utilización del sitio web de LIBRERIA HENRY y de sus
          contenidos por parte del USUARIO, el acceso a las plataformas móviles
          e informáticas y el acceso al sistema informático del USUARIO por
          parte de terceros. La información publicada en la web de LIBERIA HENRY
          tiene carácter meramente informativo. A pesar de los esfuerzos de la
          Empresa por mantener los contenidos actualizados y fiables, no
          garantiza que los mismos no puedan contener inexactitudes, errores
          ortográficos o estar desactualizados, sin que la Empresa se haga
          responsable de este hecho.
        </h3>
      </div>
      <div className={styles.boton}>
        <button className={styles.botonArriba} onClick={scrollToTop}>
          <BsArrowUpCircle size="2rem" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
