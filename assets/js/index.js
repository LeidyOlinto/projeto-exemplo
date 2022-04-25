var people = [
    {
        name: 'suverleide da silva olinto',
        tel: '51 99999-9926',
        xp: true
    },
    {
        name: 'Anderson dos santos',
        tel: '51 99999-9999',
        xp: true
    },
    {
        name: 'Karina da Silva Pereira',
        tel: '51 99999-9999',
        xp: false
    },   
    {
        name: 'Caue da Silva ',
        tel: '51 99999-9999',
        xp: true
    },   
];
 function desenhaTabela() {

    currentLines = [...(document.querySelectorAll('table.lista tbody .dinamic-content'))];
    currentLines.forEach((element)=>{
        element.remove()
    });

    for (person in people) {
       
    document.querySelector ('table.lista tbody').innerHTML +=`
        <tr class="dinamic-content" style="background-color: ${ ((person % 2 == 0) ? '#fff' : '#eee') }">
            <td>
        ${ people[person].name }
            </td>
            <td>
            ${ people[person].tel }
            </td>
            <td>
            ${ (people[person].xp ? '<strong style="color:green"> Sim </strong> ': '<strong style="color:red">Nao</strong> ' ) }
            </td>
            <td>
            <button onclick="people.splice(${person}, 1); desenhaTabela() "> Excluir </button>
                
            </td>
        </tr>`
    }
}
desenhaTabela()