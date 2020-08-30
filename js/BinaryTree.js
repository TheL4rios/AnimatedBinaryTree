class BinaryTree {
    constructor() {
        this.root = undefined;
        this.RIGHT = 1;
        this.LEFT = 0;
        this.CENTER = -1;
        this.id = 0;
        this.CONTAINER = document.getElementById('tree');
    }

    addRecursively(number, root) {
        if (number > root.value) {
            if (root.right === undefined) {
                this.id++;
                const node = new Node(number, undefined, undefined, this.id);
                root.right = node;
                this.addNode(node, this.RIGHT, root.id);
            } else {
                this.addRecursively(number, root.right);
            }
            return;
        }

        if (root.left === undefined) {
            this.id++;
            const node = new Node(number, undefined, undefined, this.id);
            root.left = node;
            this.addNode(node, this.LEFT, root.id);
        } else {
            this.addRecursively(number, root.left);
        }
    }

    add(number) {
        if (this.root === undefined) {
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

            current.style.top = (previous.y + 112) + 'px';

            if (position === this.RIGHT) {
                current.style.left = (previous.x + 112) + 'px';
            } else if (position === this.LEFT) {
                current.style.left = (previous.x - 112) + 'px';
            }

            this.drawLine(current, previous, position);
        }
    }

    drawLine(current, previous, position) {
        new DrawArrow(previous, current, 'arrow-' + current.id, position).draw();
    }

    createNode(node) {
        const divContainer = document.createElement('div');
        const div = document.createElement('div');
        const p = document.createElement('p');
        divContainer.className = 'node-container';
        div.className = 'node';
        div.id = 'node-' + node.id;
        p.append(node.value);
        div.appendChild(p);
        divContainer.appendChild(div);
        this.CONTAINER.appendChild(divContainer);
    }
}