function asTabs(node) {
    let tabs = [];
    let len = node.childNodes.length;
    for (let i = 0; i < len; i++) {
      	let child = node.childNodes[i];
      	if (child.nodeType == 1) {
        	tabs.push(child);
        }
    }
    
    let tabContainer = document.createElement('div');
    tabs.forEach(function(elem, i) {
    	let button = document.createElement('button');
      	button.textContent = elem.getAttribute('data-tabname');
      	tabContainer.appendChild(button);
    });
    node.insertBefore(tabContainer, node.firstChild);
    
    tabContainer.addEventListener('click', function(ev) {
      	let target = ev.target;
      	let targetIndex = Array
        					.from(target.parentNode.children)
        					.indexOf(target);
      	selectTab(targetIndex);
    	
    })
    
    function selectTab(n) {
    	tabs.forEach((tab, i) => {
            i == n ? tab.style.display = "" : tab.style.display = "none";
        });
        Array.from(tabContainer.childNodes).forEach((elem, index) => {
        	if (index === n)
              elem.style.background === 'red';
        })
    }
    
    selectTab(0);
  }

  asTabs(document.querySelector("#wrapper"));