
class Spinner {
    handleClear() {
        rootSpinner.innerHTML = ''
    }
    render() {
        const html = `
            <div class="spinner-container">
                <img class="spinner__img" src="components/Spinner/img/spinner.svg">
            </div>
        `
        rootSpinner.innerHTML = html
    }

}

const spinnerPage = new Spinner()