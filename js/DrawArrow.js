class DrawArrow {
    constructor(from, id, position) {
        this.from = from;
        this.id = id;
        this.position = position;
        this.LEFT = 0;
        this.RIGHT = 1;
    }

    async draw() {
        const arrowContainer = document.createElement('div');
        const line = document.createElement('div');
        const arrow = document.createElement('div');

        arrowContainer.className = 'arrow-container';
        arrowContainer.id = this.id;
        
        line.className = 'line';
        line.id = 'line-' + this.id;
        arrow.className = 'arrow';
        arrow.id = 'arrow-' + this.id;

        arrowContainer.appendChild(line);
        arrowContainer.appendChild(arrow);
        document.getElementById('tree').appendChild(arrowContainer);

        await this.adjustArrow(document.getElementById(this.id));
    }

    async adjustArrow(arrow) {
        const from = this.from;
        const arrowPosition = arrow.getBoundingClientRect();

        if (this.position === this.LEFT) {
            arrow.style.top = (from.bottom - 10) + 'px';
            arrow.style.left = (from.left - (arrowPosition.right - arrowPosition.left) + 10) + 'px';
            arrow.style.animation = 'rotate 1s ease';
            await this.sleep(1000);
            arrow.style.transform = 'rotateY(180deg)';
        } else {
            arrow.style.top = (from.bottom - 10) + 'px';
            arrow.style.left = (from.right - 10) + 'px';
            arrow.style.animation = 'appear 1s ease';
        }  
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}