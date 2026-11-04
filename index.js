const express = require('express');
const app = express();
const port = 3000;

const buku=[];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));  

app.get('/getdata', (req, res) => {
    res.json(buku);
});

app.get('/getDataSiswa', (req, res) => {
    let html = `
    <h1>Data Siswa</h1>
    <table border="1">
        <tr>
            <th>Id</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Pekerjaan</th>
        </tr>
`;
    siswa.forEach(s => {
        html += `
        <tr>
            <td>${s.id}</td>
            <td>${s.nama}</td>
            <td>${s.umur}</td>
            <td>${s.pekerjaan}</td>
        </tr>
        `;
    });
    html += `
    </table>
    `;
    res.send(html);
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});