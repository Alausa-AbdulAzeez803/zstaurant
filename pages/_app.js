import { Provider } from "react-redux";
import LayOut from "../components/LayOut";
import { store } from "../redux/Store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </Provider>
  );
}

export default MyApp;

