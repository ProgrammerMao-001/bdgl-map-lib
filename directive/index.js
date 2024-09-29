import dialogDrag from "./dialogDrag";
import divDrag from "./divDrag/index";
import divEscClose from "./divEscClose";
const install = function (Vue) {
    Vue.directive("dialogDrag", dialogDrag);
    Vue.directive("divDrag", divDrag);
    Vue.directive("divEscClose", divEscClose);
};

if (window.Vue) {
    Vue.use(install);
}

export default install;
