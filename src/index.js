import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter  } from "react-router-dom";
import { ShopProvider } from "./ShopContext";
const container = document.getElementById("root");
{/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> */}

const root = createRoot(container);

root.render(
    <ShopProvider>
 <BrowserRouter>
        <App/>
    </BrowserRouter>
    </ShopProvider>
   
);
