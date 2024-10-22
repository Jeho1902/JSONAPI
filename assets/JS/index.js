fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let output = '';
        data.forEach(user => {
            output += `
<tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
    <td>${user.id}</td>
</tr>
`;
        });
        document.getElementById('datos').innerHTML = output;


        document.getElementById('postForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const body = document.getElementById('body').value;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(response => response.json())
                .then(json => console.log(json));
        });
    });

    
    function editar() {
        const postId = document.getElementById('postId').value;
        const newTitle = document.getElementById('newTitle').value;
        const newBody = document.getElementById('newBody').value;

        fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
            method: 'PUT',
            body: JSON.stringify({
                id: postId,
                title: newTitle,
                body: newBody,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }

    
    function eliminar() {
        const postId = document.getElementById('deletePostId').value;

        fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    alert('Post eliminado exitosamente');
                }
            });
    }

