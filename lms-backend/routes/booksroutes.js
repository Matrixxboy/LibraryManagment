const router = require("express").Router();
const bookModel = require("../models/bookmodels");

//POST REQUEST
router.post("/add",async(req,res)=>{
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(()=>{
            res.status(200).json({messge : "Book Added Succesfully"});
        });
    } catch (error) {
        console.log("Its error to post the data");
    }
});

//GET REQUEST
router.get("/getBooks",async(req,res)=>{
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({books})
    } catch (error) {
        console.log("error : Books not get")
    }
})

//GET REQUEST BY ID
router.get("/getBooks/:id", async(req,res)=>{
    let book;
    const id = req.params.id;
    book = await bookModel.findById(id);
    res.status(200).json({ book });
    try {
        
    } catch (error) {
        console.log("Error : Book get by id error")
    }
})

//UPDATE BOOK BY ID
router.put("/updateBook/:id",async(req,res)=>{
    const id = req.params.id;
    const {bookname,description,author,image,price} = req.body;
    let book;
    try {
        book=await bookModel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price
        });
        await book.save().then(() => res.json({messge : "Data Upadted"}));
    } catch (error) {
        console.log("error : upadte book error")
    }
})

//DELETE BOOK BY ID
router.delete("/deleteBook/:id",async(req,res)=>{
    const id = req.params.id;
    const {bookname,description,author,image,price} = req.body;
    try {
        await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({
            messge : "The book is deleted"
        }))
    } catch (error) {
        console.log("error : Book is not delete");
    }
})

module.exports = router;

// just want to see ssh is working 