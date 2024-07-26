const setLanguage = () => {
    const localization = {}
    const currentLanguage = window.localStorage.getItem('lang') || 'ru'
    fetch(`localization/${currentLanguage}.txt`).then(x => x.text()).then((response) => {
        response.split('\n').forEach(row => {
            const [key, value] = row.split('|')
            localization[key.trim()] = value.trim()
        });

        const locals = document.querySelectorAll('[data-local]');
        for (let i = 0; i < locals.length; i++) {
            const elem = locals[i]
            const localKey = elem.getAttribute('data-local')
            elem.innerText = localization[localKey]
        }
    });
}
setLanguage()