import db from './db.js';
import express from 'express'
import cors from 'cors'
import infoa_dtb_tb_livro from './models/infoa_dtb_tb_livro.js';


const app = express();
app.use(cors());

app.get('/lancamento', async (req, resp) => {
    try {
        let livros = await db.infoa_dtb_tb_livro.findAll({ order: [['DT_LANCAMENTO', 'desc']] });
        resp.send(livros);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})




app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))