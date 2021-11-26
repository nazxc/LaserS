function slidePlugin(activeSlide = 0) {
    const workItems = document.querySelectorAll('.work__item')

    workItems[activeSlide].classList.add('active__item')

    for (const workItem of workItems) {
        workItem.addEventListener('click', () => {
            clearActiveClasses()

            workItem.classList.add('active__item')
        })
    }

    function clearActiveClasses() {
        workItems.forEach((workItem) => {
            workItem.classList.remove('active__item')
        })
    }
}

slidePlugin(2)