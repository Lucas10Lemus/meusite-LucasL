const animateElement = (element, animationClass) => {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => {
        element.classList.remove(animationClass);
    });
};

const fadeIn = (element) => {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s ease-in';
    requestAnimationFrame(() => {
        element.style.opacity = 1;
    });
};

const slideIn = (element, direction = 'left') => {
    const initialTransform = direction === 'left' ? '-100%' : '100%';
    element.style.transform = `translateX(${initialTransform})`;
    element.style.transition = 'transform 0.5s ease-in-out';
    requestAnimationFrame(() => {
        element.style.transform = 'translateX(0)';
    });
};

export { animateElement, fadeIn, slideIn };