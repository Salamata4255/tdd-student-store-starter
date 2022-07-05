import React from "react";
import "./Menu.css";

export default function SubNavBar({
  activeCategory,
  setActiveCategory,
  handleOnSearchInput,
  searchInput,
}) {
  const [open, setOpen] = React.useState(true);
  const toggleOpen = () => setOpen((isOpen) => setOpen(!isOpen));

  return (
    <nav className="SubNavbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              name="search"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={handleOnSearchInput}
            />
            <i className="material-icons">search</i>
          </div>

          <div className="links"></div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons" onClick={() => toggleOpen()}></i>
          </div>
          <ul className={`category-menu ${open ? `open` : `closed`}`}>
            {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map(
              (categorie) => (
                <li
                  className={activeCategory === categorie ? "is-active" : ""}
                  key={categorie}
                >
                  <button onClick={() => setActiveCategory(categorie)}>
                    {categorie}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
