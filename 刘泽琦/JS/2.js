window.addEventListener('load', function () {
    var btn_l = document.querySelector('.btn-l');
    var btn_r = document.querySelector('.btn-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    var ul = document.querySelector('.img');
    var ol = document.querySelector('.circle');
    var num = 0;
    // 鼠标经过就隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        btn_l.style.display = 'block';
        btn_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })

    focus.addEventListener('mouseleave', function () {
        btn_l.style.display = 'none';
        btn_r.style.display = 'none';
        timer = setInterval(function () {
            btn_r.click();
    }, 2000)
    })

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }

    ol.children[0].className = 'current';

    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var circle = 0;
    btn_r.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth);
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })

    btn_l.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';
        }
        num--;
        animate(ul, -num * focusWidth);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })

    var timer = this.setInterval(function () {
        btn_r.click();
    }, 2000);
})