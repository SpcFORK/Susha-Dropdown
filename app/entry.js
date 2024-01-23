window.Main = class Main {

  static PageTitle = 'Main';

  /*
    This class automatically inherits:
      - The entry element,
      - The page pathname,
      - The file location.

    this.entry, this.path, this.entryPath,
  */

  static async preload() {
    await import('./susha.dropdown.js');
  }

  constructor(entry) {
    let list = new SushaDropdown(
      h1(Main.PageTitle),
      p('test1'),
      p('test2'),
      p('test3')
    )

    entry.appendChild(list.main.get$())
  }

}