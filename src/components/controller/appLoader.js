import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "2a208fdd73734f858bfec8eee4663a78", // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
