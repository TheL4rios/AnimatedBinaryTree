class DrawArrow {
    constructor(from, to, id, position) {
        this.from = from;
        this.to = to;
        this.id = id;
        this.position = position;
        this.LEFT = 0;
        this.RIGHT = 1;
    }

    draw() {
        const arrowContainer = document.createElement('div');
        const line = document.createElement('div');
        const arrow = document.createElement('div');

        arrowContainer.className = 'arrow-container';
        arrowContainer.id = this.id;
        
        line.className = 'line';
        arrow.className = 'arrow';

        arrowContainer.appendChild(line);
        arrowContainer.appendChild(arrow);
        document.getElementById('tree').appendChild(arrowContainer);

        this.adjustArrow(document.getElementById(this.id));
    }

    adjustArrow(arrow) {
        const from = this.from;
        const arrowPosition = arrow.getBoundingClientRect();

        if (this.position === this.LEFT) {
            arrow.style.transform = 'rotateY(180deg)';
            arrow.style.top = (from.bottom - 10) + 'px';
            arrow.style.left = (from.left - (arrowPosition.right - arrowPosition.left) + 10) + 'px';
        } else {
            arrow.style.top = (from.bottom - 10) + 'px';
            arrow.style.left = (from.right - 10) + 'px';
        }

        
    }
}