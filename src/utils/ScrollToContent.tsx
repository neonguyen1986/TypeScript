const ScrollToContent = (id: string, e: React.MouseEvent<HTMLElement> | null) => {
    const { hash } = window.location
    if (hash && e) {
        console.log('-----------check', e)
        e.preventDefault()
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.location.hash = id
            }, 1000)
        }
    }
}
export default ScrollToContent