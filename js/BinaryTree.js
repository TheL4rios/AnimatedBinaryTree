class BinaryTree {
    constructor() {
        this.root = undefined;
    }

    addRecursively(number, root, i) {
        i++;
        
        if (number > root.value) {
            if (root.right == undefined) {
                const node = new Node(number, undefined, undefined, i);
                root.right =  JSON.parse(JSON.stringify(node));
                this.addNode( JSON.parse(JSON.stringify(node)), i);
            } else {
                this.addRecursively(number, root.right, i);
            }
            return;
        }

        if (root.left == undefined) {
            const node = new Node(number, undefined, undefined, i);
            root.left = JSON.parse(JSON.stringify(node));
            this.addNode(JSON.parse(JSON.stringify(node)), i);
        } else {
            this.addRecursively(number, root.left, i);
        }
    }

    add(number) {
        if (this.root == undefined) {
            const node = new Node(number, undefined, undefined, 0);
            this.root = JSON.parse(JSON.stringify(node));
            this.addNode(JSON.parse(JSON.stringify(node)), 0);
            return;
        } 

        this.addRecursively(number, this.root, 0);
    }

    addNode (node, i) {
        const container = document.getElementById('tree');
        const div = document.createElement('div');
        const p = document.createElement('p');
        div.className = 'node';
        div.id = 'node-' + node.id;
        p.append(node.value);
        div.appendChild(p);
        
        if (i == 0) {
            container.appendChild(div);
        } else {
            const img = document.createElement('img');
            img.src = './img/arrow.png';
            img.width = 50;
        }
    }
}