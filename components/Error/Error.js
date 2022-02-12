
    class Error{
        render() {
            const html = `

            <div class="error-container">
                <div class="error-message">
                    <h3>Нет доступа к сети</h3>
                    <p>Повторите попытку позже</p>
                </div>
             </div>
            `
            rootError.innerHTML = html
        }
    }

const errorPage = new Error()   

