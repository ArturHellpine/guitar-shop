
class Header {
    handleOpenShoppingPage () {
        shoppingPage.render()
    }

    render(count) {
       const html = `
        <div class="header-container">
        <span class="header__span">Магазин гитар</span>
            <div class="header-counter" onclick="headerPage.handleOpenShoppingPage()" >Корзина: ${count}</div>
        </div>
       ` 

       rootHeader.innerHTML = html
    }
}

const headerPage = new Header()
