function ticTacToe() {
    const ticTac = document.querySelector('.tic-tac');
    const winCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    let isWin = false;
    let clet = 0;
    const complexity = document.querySelector('.complexity');
    let level = localStorage.getItem('level') ? localStorage.getItem('level') : 'easy';
    const restart = document.querySelector('.restart');
    const modal = document.querySelector('.modal');
    const modalText = document.querySelector('.modal__text');
    const modalBtn = document.querySelector('.modal__btn');
    // const choise = document.querySelector('.choise');
    
    complexity.children.forEach(lev => {
        lev.classList.remove('active');
        if (lev.getAttribute('id') === level) {
            lev.classList.add('active');
        }
    });

    if (level === 'human') {
        ticTac.removeEventListener('click', playWithComputer);
        ticTac.removeEventListener('click', playWithHuman);
        ticTac.addEventListener('click', playWithHuman);
    }
    
    
    function restartGame() {
        clet = 0;
        ticTac.children.forEach(child => {
            child.innerHTML = '';
            child.setAttribute('data-value', '');
        });
        isWin = false;
        modal.classList.remove('active');
    }
    modalBtn.addEventListener('click', () => {
        restartGame();
    });
    
    
    restart.addEventListener('click', () => {
        restartGame();
    });
    

    complexity.addEventListener('click', (e) => {
        complexity.children.forEach(child => {
            child.classList.remove('active');
        });
        e.target.classList.add('active');
        ticTac.removeEventListener('click', playWithComputer);
        ticTac.removeEventListener('click', playWithHuman);
        ticTac.addEventListener('click', playWithComputer);
        // choise.style.display = '';

        if (e.target.classList.contains('easy')) {
            level = 'easy';
            localStorage.setItem('level', level);
        }
        if (e.target.classList.contains('medium')) {
            level = 'medium';
            localStorage.setItem('level', level);

        }
        if (e.target.classList.contains('hard')) {
            level = 'hard';
            localStorage.setItem('level', level);
        }
        if (e.target.classList.contains('human')) {
            level = 'human';
            localStorage.setItem('level', level);
            ticTac.removeEventListener('click', playWithComputer);
            ticTac.addEventListener('click', playWithHuman);
            // choise.style.display = 'none';
        }
    });
    

    function playWithComputer(e) {
        if (!e.target.classList.contains('tic-tac__place') || e.target.getAttribute('data-value') || isWin) return;
        createCross(e.target);
        clet++;
        if (checkWin()) return;
        computerStep(level);
        clet++;
        if (checkWin()) return;
    }

    function playWithHuman(e) {
        if (!e.target.classList.contains('tic-tac__place') || e.target.getAttribute('data-value') || isWin) return;

        if (clet % 2 === 0) {
            createCross(e.target);
        } 
        else {
            createZero(e.target);
        }
        clet++;
        if (checkWin()) return;
    }
    
    ticTac.addEventListener('click', playWithComputer);

    

    function createCross(target) {
        const cross = document.createElement('div');
        cross.classList.add('cross');
        const span = document.createElement('span');
        const span2 = document.createElement('span');
        cross.append(span);
        cross.append(span2);
        target.append(cross);
        target.setAttribute('data-value', 'cross');
    }

    function createZero(target) {
        const zero = document.createElement('div');
        zero.classList.add('zero');
        target.append(zero);
        target.setAttribute('data-value', 'zero');
    }

    function checkWin() {
        for (let i = 0; i < winCombinations.length; i++) {
            if (ticTac.children[winCombinations[i][0]].getAttribute('data-value') === 'cross' && ticTac.children[winCombinations[i][1]].getAttribute('data-value') === 'cross' && ticTac.children[winCombinations[i][2]].getAttribute('data-value') === 'cross') {
                console.log('Win');
                isWin = true;
                modal.classList.add('active');
                modalText.textContent = 'Победили_крестики!'

                return true;
            }
            if (ticTac.children[winCombinations[i][0]].getAttribute('data-value') === 'zero' && ticTac.children[winCombinations[i][1]].getAttribute('data-value') === 'zero' && ticTac.children[winCombinations[i][2]].getAttribute('data-value') === 'zero') {
                console.log('Win');
                isWin = true;
                modal.classList.add('active');
                modalText.textContent = 'Победили_нолики!'
                return true;
            }
        }
        if (clet >= 9) {
            isWin = true;
            modal.classList.add('active');
            modalText.textContent = 'Ничья!'
            return true;
        }
    }

    // Computer


    function computerStep(level) {
        if (level === 'easy') {

        }
        if (level === 'medium') {
            if (intelect()) return;
        }
        if (level === 'hard') {
            if (superIntelect()) return;
        }
        let rand = Math.round(Math.random() * 8);
        if (ticTac.children[rand].getAttribute('data-value')) {
            rand = Math.round(Math.random() * 8);
            computerStep();
        }
        else {
            createZero(ticTac.children[rand]);
        }
    }

    function intelect() {
        
        for (let i = 0; i < winCombinations.length; i++) {
            let count = 0;
            let index = -1;
             
            if (ticTac.children[winCombinations[i][0]].getAttribute('data-value') === 'cross') {
                count++;
            }
            else {
                index = winCombinations[i][0];
            }
            if (ticTac.children[winCombinations[i][1]].getAttribute('data-value') === 'cross') {
                count++;
            }
            else {
                index = winCombinations[i][1];
            }
            if (ticTac.children[winCombinations[i][2]].getAttribute('data-value') === 'cross') {
                count++;
            }
            else {
                index = winCombinations[i][2];
            }

            if (count >= 2 && !ticTac.children[index].getAttribute('data-value')) {
                createZero(ticTac.children[index]);
                return true;
            }
        }

        for (let i = 0; i < winCombinations.length; i++) {
            let count = 0;
            let index = -1;
             
            if (ticTac.children[winCombinations[i][0]].getAttribute('data-value') === 'zero') {
                count++;
            }
            else {
                index = winCombinations[i][0];
            }
            if (ticTac.children[winCombinations[i][1]].getAttribute('data-value') === 'zero') {
                count++;
            }
            else {
                index = winCombinations[i][1];
            }
            if (ticTac.children[winCombinations[i][2]].getAttribute('data-value') === 'zero') {
                count++;
            }
            else {
                index = winCombinations[i][2];
            }

            if (count >= 2 && !ticTac.children[index].getAttribute('data-value')) {
                createZero(ticTac.children[index]);
                return true;
            }
        }
    }

    function superIntelect() {
        let dangerousCombo = [];
        let perspectiveCombo = [];
        let counOfNum = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        let mostDanger = [0, 0, 0, 0, 0, 0, 0, 0, 0];


        for (let i = 0; i < winCombinations.length; i++) {
            if (ticTac.children[winCombinations[i][0]].getAttribute('data-value') !== 'cross' && ticTac.children[winCombinations[i][1]].getAttribute('data-value') !== 'cross' && ticTac.children[winCombinations[i][2]].getAttribute('data-value') !== 'cross') {
                perspectiveCombo.push(winCombinations[i]);
            }
        }

        perspectiveCombo.forEach(combo => {
            counOfNum[combo[0]] += 1;
            counOfNum[combo[1]] += 1;
            counOfNum[combo[2]] += 1;
        });
        console.log(perspectiveCombo);
        console.log(dangerousCombo);
        console.log(counOfNum, mostDanger);

        for (let i = 0; i < winCombinations.length; i++) {
            let count = 0;
            let index = -1;
             
            if (ticTac.children[winCombinations[i][0]].getAttribute('data-value') === 'zero') {
                count++;
            }
            else {
                index = winCombinations[i][0];
            }
            if (ticTac.children[winCombinations[i][1]].getAttribute('data-value') === 'zero') {
                count++;
            }
            else {
                index = winCombinations[i][1];
            }
            if (ticTac.children[winCombinations[i][2]].getAttribute('data-value') === 'zero') {
                count++;
            }
            else {
                index = winCombinations[i][2];
            }

            if (count >= 2 && !ticTac.children[index].getAttribute('data-value')) {
                createZero(ticTac.children[index]);
                return true;
            }
        }

        for (let i = 0; i < winCombinations.length; i++) {
            let count = 0;
            let index = -1;
             
            if (ticTac.children[winCombinations[i][0]].getAttribute('data-value') === 'cross') {
                count++;
            }
            else {
                index = winCombinations[i][0];
            }
            if (ticTac.children[winCombinations[i][1]].getAttribute('data-value') === 'cross') {
                count++;
            }
            else {
                index = winCombinations[i][1];
            }
            if (ticTac.children[winCombinations[i][2]].getAttribute('data-value') === 'cross') {
                count++;
            }
            else {
                index = winCombinations[i][2];
            }

            if (count >= 2 && !ticTac.children[index].getAttribute('data-value')) {
                createZero(ticTac.children[index]);
                return true;
            }
        }

        if (!ticTac.children[4].getAttribute('data-value')) {
            createZero(ticTac.children[4]);
            return true;
        }

        let sort = []; 
        for (let i = 0; i < counOfNum.length; i++) {
            let maxValue = Math.max.apply(null, counOfNum);
            if (counOfNum[i] >= maxValue) {
                sort.push(i);
            }
        }
        let rand = Math.round(Math.random() * (sort.length - 1));

        console.log(sort, rand);
        
        if (!ticTac.children[sort[rand]].getAttribute('data-value')) {
            createZero(ticTac.children[sort[rand]]);
            return true;
        }
        
    }
}


ticTacToe();