class BinaryTree {
    constructor() {
        this.root = undefined;
        this.RIGHT = 1;
        this.LEFT = 0;
        this.CENTER = -1;
        this.id = 0;
    }

    addRecursively(number, root, previous) {
        this.id++;
        
        if (number > root.value) {
            if (root.right == undefined) {
                const node = new Node(number, undefined, undefined, this.id);
                root.right =  node;
                this.addNode(node, this.RIGHT, previous);
            } else {
                this.addRecursively(number, root.right, root.id);
            }
            return;
        }

        if (root.left == undefined) {
            const node = new Node(number, undefined, undefined, this.id);
            root.left = node;
            this.addNode(node, this.LEFT, previous);
        } else {
            this.addRecursively(number, root.left, root.id);
        }
    }

    add(number) {
        if (this.root == undefined) {
            const node = new Node(number, undefined, undefined, 0);
            this.root = node;
            this.addNode(node, this.CENTER, -1);
            return;
        } 

        this.addRecursively(number, this.root, this.root.id);
    }

    addNode (node, position, previousId) {
        this.createNode(node);

        if (node.id == 0) {
            const position = document.getElementById('node-0').getBoundingClientRect();
            document.getElementById('node-0').style.left = (window.screen.width / 2) - (position.width / 2) + 'px';
        } else {
            const previous = document.getElementById('node-' + previousId).getBoundingClientRect();
            const current = document.getElementById('node-' + node.id);

            console.log('previouse - ' + previousId);
            console.log('current - ' + node.id);

            if (position === this.RIGHT) {
                current.style.top = (previous.y + 100) + 'px';
                current.style.left = (previous.x + 100) + 'px';
            } else if (position === this.LEFT) {
                current.style.top = (previous.y + 100) + 'px';
                current.style.left = (previous.x - 100) + 'px';
            }
        }
    }

    createNode(node) {
        const container = document.getElementById('tree');
        const divContainer = document.createElement('div');
        const div = document.createElement('div');
        const p = document.createElement('p');
        divContainer.className = 'node-container';
        div.className = 'node';
        div.id = 'node-' + node.id;
        p.append(node.value);
        div.appendChild(p);
        divContainer.appendChild(div);
        container.appendChild(divContainer);
    }
}