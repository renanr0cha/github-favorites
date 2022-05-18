export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

export class FavoritesView extends Favorites {
  constructor (root) {
    super(root)

    this.update()
  }

  update() {
    this.removeAllTr()

    const tr = `
    <tr>
          <td class="user">
            <img src="https://github.com/maykbrito.png" alt="imagem de maykbrito">
            <a href="https://github.com/maykbrito" target="_blank">
              <p>Mayk Brito</p>
              <span>maykbrito</span>
            </a>
          </td>
          <td class="repositories">
            76
          </td>
          <td class="followers">
            9589
          </td>
          <td>
            <button class="remove">&times;</button>
          </td>
        </tr>
    `
  }

  removeAllTr() {
    const tbody = this.root.querySelector('table tbody')

    tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}