(function () {
    'use strict'

    function addField(blockDom, name, value, link = false) {
        let blockNameDom = document.createElement('span');
        blockNameDom.className = 'name';
        blockNameDom.appendChild(document.createTextNode(name));

        let blockValueDom = document.createElement('span');
        blockValueDom.className = 'value';

        if (link) {
            let a = document.createElement('a');
            a.href = value;
            a.innerText = 'www';
            blockValueDom.appendChild(a);
        } else {
            blockValueDom.appendChild(document.createTextNode(value));
        }

        let blockSpanDom = document.createElement('span');
        blockSpanDom.className = 'block-span';
        blockSpanDom.appendChild(blockNameDom);
        blockSpanDom.appendChild(blockValueDom);

        blockDom.appendChild(blockSpanDom);
    }

    function addButton(blockDom, time, event) {
        let buttonDom = document.createElement('button');
        buttonDom.addEventListener('click', onButtonClick(time, event));
        buttonDom.innerText = time;
        blockDom.appendChild(buttonDom);
    }

    function addBlock(event) {
        let fieldConteinerDom = document.createElement('span');
        fieldConteinerDom.className = 'field-conteiner';
        addField(fieldConteinerDom, 'Name', event.name);
        addField(fieldConteinerDom, 'Start', event.startDate);
        addField(fieldConteinerDom, 'End', event.endDate);
        addField(fieldConteinerDom, 'URL', event.url, true);

        let buttonConteiner = document.createElement('span');
        buttonConteiner.className = 'button-conteiner';
        addButton(buttonConteiner, 3, event);
        addButton(buttonConteiner, 7, event);
        addButton(buttonConteiner, 14, event);

        let eventDom = document.createElement("div");
        eventDom.className = 'event';
        eventDom.appendChild(fieldConteinerDom);
        eventDom.appendChild(buttonConteiner);

        document.body.appendChild(eventDom);
    }

    function onButtonClick(time, event) {
        return () => setTimeout(showNotification.bind(this, event), time * 1000);
    }

    function showNotification(event) {
        alert(`Reminder of your event:
                Name: ${event.name},
                Period: ${event.startDate} -- ${event.endDate},
                URL: ${event.url}`);
    }

    window.addEventListener('load', function () {
        events.forEach(event => addBlock(event));
    });
})()