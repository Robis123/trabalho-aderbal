// Próximo ID para adicionar um novo curriculo
let _nextId = 1;
// ID do curriculo que está sendo editado
let _activeId = 0;
const addToLocalStorage = (name,data)=>{
    localStorage.setItem = (name,data);
}
const CURRICULO_FORM = $("#curriculo-form");
const CURRICULO_TABLE = $("#curriculoTable");

function handlecurriculoEdit() {
    const row = $(this).parents("tr");
    const cols = row.children("td");

    _activeId = $($(cols[3]).children("button")[0]).data("id");

    curriculoForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());

    curriculoForm.setSubmitButtonText("Actualizar");
}

function handlecurriculoDeleteClick() {
    $(this).parents("tr").remove();
}

function handlecurriculoSubmission(e) {
    e.preventDefault();

    if (curriculoForm.hasErrors()) {
        return;
    }

    if (curriculoForm.getSubmitButtonText() === "Actualizar") {
        curriculoTable.updateInTable(_activeId);
        curriculoForm.setSubmitButtonText("Adicionar Livro");
    } else {
        curriculoTable.addToTable(_activeId);
        _nextId += 1;
    }

    curriculoForm.clear();
}

CURRICULO_TABLE.on('click', '.curriculo-edit', handlecurriculoEdit);
CURRICULO_TABLE.on('click', '.curriculo-delete', handlecurriculoDeleteClick);
CURRICULO_FORM.on('submit', handlecurriculoSubmission);