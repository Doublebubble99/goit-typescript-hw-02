/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentInterface {
  title: string;
  pageInfo: () => void;
}
class Component<T> {
  constructor(public props: T) {}
}
class Page extends Component<ComponentInterface> {
  pageInfo() {
    console.log(this.props.title);
  }
}
export {};
