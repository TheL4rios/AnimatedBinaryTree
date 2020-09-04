document.addEventListener('DOMContentLoaded', () => {
    const tree = new BinaryTree();

    function add() {
        const txtInsert = document.getElementById('txtInsert');
        const value = parseInt(txtInsert.value);
        const validate = isValid(txtInsert, value);

        if (validate) {
            validate.hideError();
            tree.add(value);
            txtInsert.value = '';
        }
    }

    document.getElementById('insert').addEventListener('click', () => {
        add();
    });

    document.getElementById('txtInsert').addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            add();
        }
    });

    async function remove() {
        const txtRemove = document.getElementById('txtRemove');
        const value = parseInt(txtRemove.value);
        const validate = isValid(txtRemove, value);

        if (validate) {
            validate.hideError();
            txtRemove.value = '';
            await tree.remove(value);
        }
    }

    document.getElementById('remove').addEventListener('click', async () => {
        await remove();
    });

    document.getElementById('txtRemove').addEventListener('keyup', async (e) => {
        if (e.keyCode === 13) {
            await remove();
        }
    });

    async function search() {
        const txtSearch = document.getElementById('txtSearch');
        const value = parseInt(txtSearch.value);
        const validate = isValid(txtSearch, value);

        if (validate) {
            validate.hideError();
            
            if (await tree.search(value, tree.root) !== undefined) {
                await tree.sleep(2000);
            } else {
                alert('Número no existente en la estructura de datos');
            }
            tree.repaint();
        }
    }

    document.getElementById('search').addEventListener('click', async () => {
        await search();
    });

    document.getElementById('txtSearch').addEventListener('keyup', async (e) => {
        if (e.keyCode === 13) {
            await search();
        }
    });

    document.getElementById('btn-preOrden').addEventListener('click', async () => {
        await tree.preorder(tree.root);
        await tree.sleep(2000);
        tree.repaint();
    });

    document.getElementById('btn-inOrden').addEventListener('click', async () => {
        await tree.inorder(tree.root);
        await tree.sleep(2000);
        tree.repaint();
    });

    document.getElementById('btn-postOrden').addEventListener('click', async () => {
        await tree.postorder(tree.root);
        await tree.sleep(2000);
        tree.repaint();
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