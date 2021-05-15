if(localStorage.getItem('contacts') == undefined){
    localStorage.setItem('contacts', '[]');
}

let result = '';
let contacts = JSON.parse(localStorage.getItem('contacts'));

for( let i in contacts ){
    result += `<div class="contact-item">
    <svg  id='cros' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style="fill:rgba(187, 18, 18, 1);"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"></path></svg>
    <div class="contact-item-info">
        <h4>${contacts[i].name}</h2>
        <p>${contacts[i].phone}</p>
    </div>
    <box-icon name='x-circle' color='#bb1212' size='md' style="cursor: pointer;" onClick="deleteCnt('${contacts[i].id}')"></box-icon>
    </div>`
}

document.getElementsByClassName('contact-body')[0].innerHTML = result;

function submitContact(e){
    e.preventDefault();

    let cntName = document.querySelector('#name').value;
    let cntNo = document.querySelector('#number').value;
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    let contact = {
        id:Math.random().toString(36).substr(2, 8),
        name: cntName,
        phone: cntNo
    }
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts)); //we have to use string as an argument not object
    document.querySelector('#name').value = "";
    document.querySelector('#number').value = "";
    location.reload()
}

function deleteCnt(id){
    let contacts = JSON.parse(localStorage.getItem('contacts'));

    contacts = contacts.filter(function(contact){
        return contact.id != id;
    })

    localStorage.setItem('contacts', JSON.stringify(contacts));
    location.reload()
}
