const curriculoForm = (function($){
    const CURRICULO_NOME = $("#curriculo_nome");
    const CURRICULO_OBJETIVOS = $("#curriculo_objetivos");
    const CURRICULO_CURSOS = $("#curriculo_cursos");
    const CURRICULO_UPDATE_BUTTON = $("#updateButton");

    function clear() {
        setData();
        CURRICULO_NOME.focus();
    }

    function hasErrors() {
        return CURRICULO_NOME.val() === null || CURRICULO_NOME.val() === '';
    }

    function getData() {
        return {
            title: CURRICULO_NOME.val(),
            author: CURRICULO_OBJETIVOS.val(),
            publisher: CURRICULO_CURSOS.val(),
        };
    }

    function setData(Nome='', Objetivos='', Cursos='') {
        CURRICULO_NOME.val(Nome);
        CURRICULO_OBJETIVOS.val(Objetivos);
        CURRICULO_CURSOS.val(Cursos);
    }

    function setSubmitButtonText(str) {
        CURRICULO_UPDATE_BUTTON.text(str);
    }

    function getSubmitButtonText() {
        return CURRICULO_UPDATE_BUTTON.text();
    }

    return {
        clear: clear,
        hasErrors: hasErrors,
        getData: getData,
        setData: setData,
        setSubmitButtonText: setSubmitButtonText,
        getSubmitButtonText: getSubmitButtonText,
    };
})(jQuery);