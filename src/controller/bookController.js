const books = [];

export function getBooks(req, res){
    if(books){
        return res.send(books);
    }
    return res.sendStatus(204);
}

export function getBook(req, res){
    const {bookId} = req.params;
    var result = books.find((b)=> b.id == bookId);
    if(result){
        return res.send(result);
    }
    return res.sendStatus(204);
}

export function postBook(){
    var body = req.body;
    var existe = books.find((b)=> b.id == body.id);
    if(existe){
       return res.send({message:"Id já utilizado."})
    }

    books.push(body);
    res.send(body).sendStatus(201);
}