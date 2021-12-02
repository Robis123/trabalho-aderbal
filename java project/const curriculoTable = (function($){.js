const curriculoTable = (function($){
    const CURRICULO_TABLE_BODY = $("#curriculoTable tbody");

    function curriculoBuildTableRow(id) {
        const curriculo = {id: id, ...curriculoForm.getData()};
        const curriculoTpl = _.template($("#curriculoTemplate").html());

        return curriculoTpl(book);
    }

    function addToTable() {
        CURRICULO_TABLE_BODY.append(curriculoBuildTableRow(_nextId));
    }

    function _findcurriculoRowById(id) {
        return $("#curriculoTable button[data-id='" + id + "']").parents("tr")[0];
    }

    function updateInTable(id)
    {
        const row = _findcurriculoRowById(id);
        const $row = $(row);

        // Adiciona a linha modifica na tabela
        $row.after(curriculoBuildTableRow());

        // Remover a linha antiga
        $row.remove();
    }

    return {
        addToTable: addToTable,
        updateInTable: updateInTable
    }
})(jQuery);