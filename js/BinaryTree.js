class BinaryTree {
    constructor() {
        this.root = undefined;
        this.RIGHT = 1;
        this.LEFT = 0;
        this.CENTER = -1;
        this.id = 0;
        this.CONTAINER = document.getElementById('tree');
    }

    async search(number, root) {
        if (root === undefined) {
            return -1;
        }

        if (number === root.value) {
            await this.changeColor(root, 'green');
            return 1;
        } else if (number > root.value) {
            if (root.right === undefined) {
                    return -1;
            } else {
                await this.changeColor(root, 'red');
                return this.search(number, root.right);
            }
        } else {
            if (root.left === undefined) {
                return -1;
            } else {
                await this.changeColor(root, 'red');
                return this.search(number, root.left);
            }
        }
    }

    async preorder(root) {
        if (root !== undefined) {
            await this.changeColor(root, 'green');
            await this.preorder(root.left);
            await this.preorder(root.right);
        }
    }

    async inorder(root) {
        if (root !== undefined) {
            await this.inorder(root.left);
            await this.changeColor(root, 'green');
            await this.inorder(root.right);
        }
    }

    async postorder(root) {
        if (root !== undefined) {
            await this.postorder(root.left);
            await this.postorder(root.right);
            await this.changeColor(root, 'green');
        }
    }

    repaint() {
        for (let i = 0; i <= this.id; i++) {
            const node = document.getElementById('node-' + i);
            
            if (darkTheme) {
                node.style.backgroundColor = '#252525';
            } else {
                node.style.backgroundColor = 'white';
            }
        }
    }

    async changeColor(root, color) {
        const node = document.getElementById(root.id);
        node.style.backgroundColor = color;
        node.style.animation = 'select 1s ease';
        await this.sleep(1000);
    }

    addRecursively(number, root) {
        if (number > root.value) {
            if (root.right === undefined) {
                this.id++;
                const node = new Node(number, undefined, undefined, 'node-' + this.id);
                root.right = node;
                this.addNode(node, this.RIGHT, root.id);
            } else {
                this.addRecursively(number, root.right);
            }
            return;
        }

        if (root.left === undefined) {
            this.id++;
            const node = new Node(number, undefined, undefined, 'node-' + this.id);
            root.left = node;
            this.addNode(node, this.LEFT, root.id);
        } else {
            this.addRecursively(number, root.left);
        }
    }

    add(number) {
        if (this.root === undefined) {
            const node = new Node(number, undefined, undefined, 'node-' + 0);
            this.root = node;
            this.addNode(node, this.CENTER, -1);
            return;
        } 

        this.addRecursively(number, this.root);
    }

    addNode (node, position, previousId) {
        this.createNode(node);

        if (node.id == ('node-' + 0)) {
            const position = document.getElementById('node-0').getBoundingClientRect();
            document.getElementById('node-0').style.left = (window.screen.width / 2) - (position.width / 2) + 'px';
        } else {
            const previous = document.getElementById(previousId).getBoundingClientRect();
            const current = document.getElementById(node.id);

            current.style.top = (previous.y + 112) + 'px';

            if (position === this.RIGHT) {
                current.style.left = (previous.x + 112) + 'px';
            } else if (position === this.LEFT) {
                current.style.left = (previous.x - 112) + 'px';
            }

            this.drawLine(current, previous, position);
            this.adjustNodes(node, position, previous);
        }

        document.getElementById(node.id).style.animation = 'appear 1s ease';
    }

    adjustNodes(node, position, previous) {
        for(let i = 0; i <= this.id; i++) {
            if (('node-' + i) != node.id) {
                const currentNode = document.getElementById(node.id).getBoundingClientRect();
                const otherNode = document.getElementById('node-' + i).getBoundingClientRect();

                if ((currentNode.x == otherNode.x) && (currentNode.y == otherNode.y)) {
                    const current = document.getElementById(node.id);
                    const arrow = document.getElementById('arrow-' + node.id);
                    const line = document.getElementById('line-arrow-' + node.id);
                    const lineArrow = document.getElementById('arrow-arrow-' + node.id);

                    if (position === this.RIGHT) {
                        current.style.left = (previous.x + 50) + 'px';
                        arrow.style.transform = 'rotateZ(20deg)';
                        arrow.style.top = (previous.bottom - 2) + 'px';
                        arrow.style.left = (previous.right - 25) + 'px';
                    } else {
                        arrow.style.transform = 'rotateY(180deg)';
                        arrow.style.transform = 'rotateZ(70deg)';
                        current.style.left = (previous.x - 50) + 'px';
                        arrow.style.top = (previous.bottom + 10) + 'px';
                        arrow.style.left = (previous.left - 50) + 'px';
                    }

                    line.style.width = '60px';
                    lineArrow.style.top = '52px';
                    lineArrow.style.left = '37px';
                }
            }
        }
    }

    drawLine(current, previous, position) {
        new DrawArrow(previous, 'arrow-' + current.id, position).draw();
    }

    createNode(node) {
        const divContainer = document.createElement('div');
        const div = document.createElement('div');
        const p = document.createElement('p');
        divContainer.className = 'node-container';
        div.className = 'node';
        div.id = node.id;
        p.append(node.value);
        div.appendChild(p);
        divContainer.appendChild(div);
        this.CONTAINER.appendChild(divContainer);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}