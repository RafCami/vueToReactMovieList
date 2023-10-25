import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="c-header">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <div className="c-header__logo">LOGO</div>
          </div>
          <div className="col-auto">
            <div className="c-header__navigation">
              <nav role="navigation">
                <ul>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
