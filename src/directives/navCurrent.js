export default {
    mounted(el, binding) {
        const { className, activeClass, currentIndex } = binding.value;
        const oNavItems = el.getElementsByClassName(className);
        oNavItems[currentIndex].className += ' ' + activeClass;
    },

    updated(el, binding) {
        console.log(el, binding)
        const { className, activeClass, currentIndex } = binding.value;
        const oldCurrentIndex  = binding.oldValue.currentIndex;
        const oNavItems = el.getElementsByClassName(className);
        oNavItems[currentIndex].className += ' ' + activeClass;
        oNavItems[oldCurrentIndex].className = 'nav-item';
    }
}