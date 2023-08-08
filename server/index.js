import express from 'express';

const app=express();

const PORT=8000;
//express server
app.listen(PORT,()=>console.log('server is running successfully'));