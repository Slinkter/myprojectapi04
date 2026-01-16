/**
 * @file Punto de entrada de la aplicación React.
 * @author Slinkter
 */

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import App from "@/App";
import "@/index.css";

/**
 * Renderiza el componente raíz de la aplicación en el DOM.
 * El componente `Provider` de Redux envuelve la aplicación para que el store esté disponible.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
