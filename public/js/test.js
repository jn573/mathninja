function getLimit (e) {
    let levels = [{ easy: 5 }, { intermeddiate: 8 }, { hard: 12 }];
    let level = e.id;
    document.getElementById('test').innerText = levels.filter['lvl'];
    return levels.filter['lvl'];
}