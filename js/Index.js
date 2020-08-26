document.addEventListener('DOMContentLoaded', () => {
    const tree = new BinaryTree();

    document.getElementById('insert').addEventListener('click', () => {
        const txtInsert = document.getElementById('txtInsert');
        const value = txtInsert.value;
        const validate = isValid(txtInsert, value);

        if (validate) {
            validate.hideError();
            tree.add(value);
        }
    });

    document.getElementById('remove').addEventListener('click', () => {
        const txtRemove = document.getElementById('txtRemove');
        const value = txtRemove.value;
        const validate = isValid(txtRemove, value);

        if (validate) {
            validate.hideError();
        }
    });

    document.getElementById('search').addEventListener('click', () => {
        const txtSearch = document.getElementById('txtSearch');
        const value = txtSearch.value;
        const validate = isValid(txtSearch, value);

        if (validate) {
            validate.hideError();
        }
    });

    function isValid(input, value) {
        const error = new Error(input);

        if (!value || isNaN(value)) {
            error.showError();
            return false;
        }

        return (true, error);
    }
});