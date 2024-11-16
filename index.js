import express from 'express';
import { engine } from 'express-handlebars';
import handlebars from 'express-handlebars';
import { Router } from 'express';
import sql from './db/neon.js'

const app = express();

app.engine(
    'handlebars',
    handlebars.engine({
      runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
      },
    })
  );
  app.set('view engine', 'handlebars');
  app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('inicio');
});
app.get('/estudiantes', async (req,res)=>{
    const lista = await sql('select * from obtener_estudiantes()');
    res.render('estudiantes', {lista});
});
app.get('/profesores', (req,res)=>{
    res.render('profesores');
});
app.get('/edificios', (req,res)=>{
    res.render('edificios');
});
app.get('/ramos', (req,res)=>{
    res.render('ramos');
});
app.listen(3000, ()=> console.log("Me quiero matar"));