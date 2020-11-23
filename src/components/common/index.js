import ConsCard from './Card';

const myPlugin = {}

myPlugin.install = (Vue) => {
    Vue.component(ConsCard.name, ConsCard);
}

export default myPlugin;