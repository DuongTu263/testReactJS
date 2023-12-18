import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <li className="item">Home</li>
            <li className="item">Services</li>
            <li className="item">News</li>
            <li className="item">Blog</li>
            <li className="item">Contact</li>
          </ul>
        </div>
        <div className="container">
          <div className="container-wrap">
            <div className="header">
              <img src={`src/assets/images/header.png`} alt="" />
            </div>
            <div className="content">
              <h2 className="content-title">Lorem ipsum dolor sit asmet?</h2>
              <p className="content-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
              </p>
            </div>
            <div className="wrapper-box">
              <div className="box-1">
                <h3 className="title-box">Lorem ipsum dolor sit amet</h3>
                <div className="box-container">
                  <img
                    className="img-box"
                    src={`src/assets/images/box1.png`}
                    alt=""
                  />

                  <div className="content-container">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </div>
                </div>
              </div>

              <div className="box-1">
                <h3 className="title-box">Lorem ipsum dolor sit amet</h3>
                <div className="box-container">
                  <img
                    className="img-box"
                    src={`src/assets/images/box2.png`}
                    alt=""
                  />
                  <p className="content-container">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="box-1">
                <h3 className="title-box">Lorem ipsum dolor sit amet</h3>
                <div className="box-container">
                  <img
                    className="img-box"
                    src={`src/assets/images/box3.png`}
                    alt=""
                  />
                  <p className="content-container">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>Copyright © 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
